import Draft from 'draft-js';
import {Map} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';

import MediaComponent from './MediaComponent';
import insertMediaBlock from '../modifiers/insertMediaBlock';
import removeMediaBlock from '../modifiers/removeMediaBlock';
import SideControl from './SideControl/SideControl'
import PopoverControl from './PopoverControl/PopoverControl'
import generateUniqueType from './../lib/generateUniqueType.js'
import Image from './Image.js'
import MediaWrapper from './MediaWrapper.js'
import getUnboundedScrollPosition from 'fbjs/lib/getUnboundedScrollPosition.js'
import Style from 'fbjs/lib/Style.js'
import defaultDecorator from './defaultDecorator.js'

var {ContentState, Editor, EditorState, RichUtils, Entity, 
  CompositeDecorator, convertFromRaw, convertToRaw} = Draft;

var getSelectedBlockElement = (range) => {
  var node = range.startContainer
  do {
    if (node.getAttribute && node.getAttribute('data-block') == 'true')
      return node
    node = node.parentNode
  } while (node != null)
  return null
  /*const currentContent = this.props.editorState.getCurrentContent()
  const selection = this.props.editorState.getSelection()
  return currentContent.getBlockForKey(selection.getStartKey())*/
};

var getSelectionRange = () => {
  var selection = window.getSelection()
  if (selection.rangeCount == 0) return null
  return selection.getRangeAt(0)
};

const isParentOf = (ele, maybeParent) => {

  while (ele.parentNode != null && ele.parentNode != document.body){
    if (ele.parentNode == maybeParent) return true
    ele = ele.parentNode
  }
  return false
}

const styles = {
  editorContainer: {
    position: 'relative',
    //paddingLeft: 48,
  },
  popOverControl: {
    //width: 78, // Height and width are needed to compute the position
    height: 24,
    display: 'none', 
    position: 'absolute',
    zIndex: 999,
  },
  sideControl: {
    height: 24, // Required to figure out positioning
    //width: 48, // Needed to figure out how much to offset the sideControl left
    left: -24,
    display: 'none',
  }
}

const popoverSpacing = 3 // The distance above the selection that popover 
  // will display



export default class RichEditor extends React.Component {

  static propTypes = {
    blockTypes: React.PropTypes.object,
    readOnly: React.PropTypes.bool,
    /**
     * The root component class name.
     */
    className: React.PropTypes.string,

    /**
     * The icon fill colour
     */
    iconColor: React.PropTypes.string,

    /**
     * The icon fill colour when selected
     */
    iconSelectedColor: React.PropTypes.string,

    /**
     * Override the inline styles for the popover component.
     */
    popoverStyle: React.PropTypes.object,

    /**
     * Override the inline buttons, these are displayed in the popover control.
     */
    inlineButtons: React.PropTypes.array,

    /**
     * Override the block buttons, these are displayed in the "more options" 
     * side control.
     */
    blockButtons: React.PropTypes.array,
  };

  static defaultProps = {
    blockTypes: {
      'image': Image,
    },
    iconColor: '#000000',
    iconSelectedColor: '#2000FF',
    //editorState: EditorState.createEmpty(defaultDecorator),
    onChange: (editorState) => {},
  };

  state = {};

  constructor(props) {
    super(props);

    if (props.decorator)
      throw new Error(`Passing in a decorator is deprecated, you must first 
        create an editorState object using your decorator and pass in that
        editorState object instead. e.g. EditorState.createEmpty(decorator)`)

    if (props.editorState instanceof ContentState)
      throw new Error(`You passed in a ContentState object when an EditorState 
        object was expected, use EditorState.createWithContent first.`)

    if (props.editorState != null && 
      !(props.editorState instanceof EditorState))
     throw new Error('Invalid editorState')
    
    /*if (props.editorState == null){
      throw new Error(`editorState prop missing, you can create one with 
        EditorState.createEmpty(defaultDecorator), you can import the 
        defaultDecorator with import { defaultDecorator } form 'draft-js-editor'`)
    }*/
    this._blockRenderer = (block) => {

      var type = block.getType()

      var Component = this.props.blockTypes[type]

      if (Component){
        return {
          component: MediaWrapper,
          props: {
            child: <Component />,
          }
        }
      }
      return null;
    };

    

    this.updateSelection = () => {
      
      var selectionRangeIsCollapsed = null,
        sideControlVisible = false,
        sideControlTop = null,
        sideControlLeft = styles.sideControl.left,
        popoverControlVisible = false,
        popoverControlTop = null,
        popoverControlLeft = null
      
      
      let selectionRange = getSelectionRange()
      if (!selectionRange) return
      
      var editorEle = ReactDOM.findDOMNode(this.refs['editor'])
      if (!isParentOf(selectionRange.commonAncestorContainer, editorEle))
        return

      var popoverControlEle = ReactDOM.findDOMNode(this.refs['popoverControl'])
      var sideControlEle = ReactDOM.findDOMNode(this.refs['sideControl'])

      let rangeBounds = selectionRange.getBoundingClientRect()
      var selectedBlock = getSelectedBlockElement(selectionRange)
      if (selectedBlock){
        var blockBounds = selectedBlock.getBoundingClientRect()

        sideControlVisible = true
        //sideControlTop = this.state.selectedBlock.offsetTop
        var editorBounds = this.state.editorBounds
        if (!editorBounds) return
        var sideControlTop = (blockBounds.top - editorBounds.top)
          + ((blockBounds.bottom - blockBounds.top) / 2)
          - (styles.sideControl.height / 2)

        //console.log(require('util').inspect(sideControlTop))
          
        sideControlEle.style.left = sideControlLeft + 'px'
        sideControlEle.style.top = sideControlTop + 'px'
        sideControlEle.style.display = 'block'
  
        if (!selectionRange.collapsed){

          // The control needs to be visible so that we can get it's width
          popoverControlEle.style.display = 'block'
          var popoverWidth = popoverControlEle.clientWidth



          popoverControlVisible = true
          var rangeWidth = rangeBounds.right - rangeBounds.left,
            rangeHeight = rangeBounds.bottom - rangeBounds.top
          popoverControlTop = (rangeBounds.top - editorBounds.top)
            - styles.popOverControl.height
            - popoverSpacing
          popoverControlLeft = 0
            + (rangeBounds.left - editorBounds.left)
            + (rangeWidth / 2)
            - (/*styles.popOverControl.width*/ popoverWidth / 2)


          //console.log(popoverControlEle)
          //console.log(popoverControlEle.style)
          popoverControlEle.style.left = popoverControlLeft + 'px'
          popoverControlEle.style.top = popoverControlTop + 'px'
        } else {
          popoverControlEle.style.display = 'none'
        }
      } else {
        sideControlEle.style.display = 'none'
        popoverControlEle.style.display = 'none'
      }
    };
    

    this._handleKeyCommand = command => {
      var {editorState} = this.props;
      var newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this._onChange(newState);
        return true;
      }
      return false;
    };

  };

  _onChange = (editorState) => {

    var { onChange } = this.props

    onChange(editorState)

    // Calling this right away doesn't always seem to be reliable. It 
    // sometimes selects the first block when the user has focus on a block
    // later on in the series. Although setting the state twice is less than
    // ideal
    //setTimeout(this.updateSelection, 4)
    //this.updateSelection()

    
  };


  _focus = () => {
    if (this.props.readOnly) return

    var editorNode = ReactDOM.findDOMNode(this.refs['editor'])
    var editorBounds = editorNode.getBoundingClientRect()
    this.setState({
      editorBounds,
    })

    var scrollParent = Style.getScrollParent(editorNode);
    //console.log(`focus called: ${require('util').inspect(getUnboundedScrollPosition(scrollParent))}`)
    this.refs.editor.focus(getUnboundedScrollPosition(scrollParent));
    //this.refs.editor.focus();
  };

  componentDidUpdate = () => {
    
    this.updateSelection()
  };

  // This editor will support a real basic example of inserting an image
  // into the page, just so something works out the box.
  handleFileInput = (e) => {
    var files = Array.prototype.slice.call(e.target.files, 0)
    files.forEach(f => 
      this.insertBlockComponent("image", {src: URL.createObjectURL(f)}))
  };

  toggleBlockType = (blockType) => {
    this.onEditorChange(
      RichUtils.toggleBlockType(this.props.editorState, blockType));

    //setTimeout(this.updateSelection, 4)
    //this.updateSelection()
  };

  toggleInlineStyle = (style) => {
    if (style != 'LINK'){
      return this.onEditorChange(
        RichUtils.toggleInlineStyle(this.props.editorState, style));
    }

    // Add a link
    const selection = this.props.editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }
    const href = window.prompt('Enter a URL');
    const entityKey = Entity.create('link', 'MUTABLE', {href});
    const content = this.props.editorState.getCurrentContent();   
    this.onEditorChange(
      RichUtils.toggleLink(this.props.editorState, selection, entityKey))

  };

  onEditorChange = (editorState) => {
    var { onChange } = this.props
    onChange(editorState)
  };

  get = () => {
    const content = this.props.editorState.getCurrentContent()
    return convertToRaw(content)
  };

  /*insertBlock = (type, data) => {
    var editorState = insertMediaBlock(this.props.editorState, type, data)
    this.setState({
      editorState,
    })
  };*/

  insertBlockComponent = (type, data) => {

    // TODO cerate a componnet pool with type
    //var type = generateUniqueType()
    
    var { editorState, entityKey } = insertMediaBlock(this.props.editorState, type, data)
    /*this.setState({
      editorState,
    })*/
    this.props.onChange(editorState)

    return entityKey
  };

  getEditorState = () => {
    return this.props.editorState
  };

  onBlur = () => {
    var popoverControlEle = ReactDOM.findDOMNode(this.refs['popoverControl'])
    var sideControlEle = ReactDOM.findDOMNode(this.refs['sideControl'])
    popoverControlEle.style.display = 'none'
    sideControlEle.style.display = 'none'
  };

  /**
   * While editing TeX, set the Draft editor to read-only. This allows us to
   * have a textarea within the DOM.
   */
  render() {
    var { 
      iconColor, 
      iconSelectedColor,
      popoverStyle,
      inlineButtons,
      blockButtons,
      editorState,
      ...otherProps, } = this.props

    if (!editorState){
      editorState = EditorState.createEmpty(defaultDecorator)
      this._onChange(editorState)
    }

    var currentInlineStyle = editorState.getCurrentInlineStyle();

    const selection = editorState.getSelection();
    const selectedBlockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    var sideControlStyles = Object.assign({}, styles.sideControl)
    /*if (this.props.readOnly != true && this.state.sideControlVisible){
      sideControlStyles.display = 'block'
    }*/

    var popoverStyleLocal = Object.assign({}, styles.popOverControl)
    /*if (this.props.readOnly != true && this.state.popoverControlVisible){
      popoverStyleLocal.display = 'block'
    }*/
    Object.assign(popoverStyleLocal, popoverStyle)

    return (
      <div style={Object.assign({}, styles.editorContainer, this.props.style)} 
        className={this.props.className} onClick={this._focus}>
        <SideControl style={sideControlStyles} 
          onImageClick={this.props.onImageClick
          // This editor will support a real basic example of inserting an image
          // into the page, just so something works out the box. 
            || ((e) => this.refs['fileInput'].click())}
          toggleBlockType={type => this.toggleBlockType(type)}
          selectedBlockType={selectedBlockType}
          iconSelectedColor={iconSelectedColor}
          iconColor={iconColor}
          popoverStyle={popoverStyle}
          ref="sideControl"
          buttons={blockButtons}
          editorState={editorState}
          updateEditorState={this.onEditorChange}
        />
        <PopoverControl 
          style={popoverStyleLocal} 
          toggleInlineStyle={style => this.toggleInlineStyle(style)}
          editorState={editorState}
          iconSelectedColor={iconSelectedColor}
          iconColor={iconColor}
          updateEditorState={this.onEditorChange}
          ref="popoverControl"
          buttons={inlineButtons}
        />
        <Editor
          blockRendererFn={this._blockRenderer}
          {...otherProps}
          editorState={editorState}
          handleKeyCommand={this._handleKeyCommand}
          onChange={this._onChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          ref="editor"
          spellCheck={true}
          onBlur={this.onBlur}
        />
        <input type="file" ref="fileInput" style={{display: 'none'}} 
          onChange={this.handleFileInput} />
      </div>
        
    );
  }
}
