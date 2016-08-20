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
  /*const currentContent = this.state.editorState.getCurrentContent()
  const selection = this.state.editorState.getSelection()
  return currentContent.getBlockForKey(selection.getStartKey())*/
};

var getSelectionRange = () => {
  var selection = window.getSelection()
  if (selection.rangeCount == 0) return null
  return selection.getRangeAt(0)
};

const styles = {
  editorContainer: {
    position: 'relative',
    //paddingLeft: 48,
  },
  popOverControl: {
    //width: 78, // Height and width are needed to compute the position
    height: 24,
    display: 'none', 
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 999,
  },
  sideControl: {
    height: 24, // Required to figure out positioning
    //width: 48, // Needed to figure out how much to offset the sideControl left
    left: -48,
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
     * The decorator to use.
     */
    decorator: React.PropTypes.object,
  };

  static defaultProps = {
    blockTypes: {
      'image': Image,
    },
    iconColor: '#000000',
    iconSelectedColor: '#2000FF',
  };

  constructor(props) {
    super(props);

    var decorator = props.decorator || defaultDecorator

    var editorState = null
    if (this.props.editorState instanceof ContentState){
      editorState = EditorState.createWithContent(
        this.props.editorState, 
        decorator
      )
    } else if (this.props.editorState){
      editorState = this.props.editorState
      if (typeof editorState.getCurrentInlineStyle !== 'function'){
        throw new Error('Invalid editorState')
      }
    } else {
      editorState = EditorState.createEmpty(decorator)
    }

    this.state = {
      editorState,
      liveTeXEdits: Map(),
    };

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

    this._focus = () => {
      if (this.props.readOnly) return

      var editorNode = ReactDOM.findDOMNode(this.refs['editor'])
      var editorBounds = editorNode.getBoundingClientRect()
      this.setState({
        editorBounds,
      })

      var scrollParent = Style.getScrollParent(editorNode);
      this.refs.editor.focus(getUnboundedScrollPosition(scrollParent));
      //this.refs.editor.focus();
    };
    this._onChange = (editorState) => {

      

      this.setState({
        editorState,
      })

      // Calling this right away doesn't always seem to be reliable. It 
      // sometimes selects the first block when the user has focus on a block
      // later on in the series. Although setting the state twice is less than
      // ideal
      setTimeout(this.updateSelection, 4)

      if (this.props.onChange){
        this.props.onChange(editorState)
      }
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
      if (selectionRange){
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


          if (!selectionRange.collapsed){

            var popoverControlElement = ReactDOM.findDOMNode(this.refs["popoverControl"])
            // The control needs to be visible so that we can get it's width
            popoverControlElement.style.display = 'block'
            var popoverWidth = popoverControlElement.clientWidth

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
            
          }
        }

      }
      
      this.setState({
        sideControlVisible,
        sideControlTop,
        sideControlLeft,
        popoverControlVisible,
        popoverControlTop,
        popoverControlLeft,
      });
    };
    

    this._handleKeyCommand = command => {
      var {editorState} = this.state;
      var newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this._onChange(newState);
        return true;
      }
      return false;
    };

    this._removeTeX = (blockKey) => {
      var {editorState, liveTeXEdits} = this.state;
      this.setState({
        liveTeXEdits: liveTeXEdits.remove(blockKey),
        editorState: removeMediaBlock(editorState, blockKey),
      });
    };
  };

  componentWillReceiveProps = (props) => {
    
    if (props.editorState){
      this.setState({
        editorState: props.editorState,
      })
    }
    if (props.content){

      const contentState = convertFromRaw(props.content);
      var editorState = EditorState.createWithContent(
        contentState, 
        decorator
      )
      this.setState({
        editorState,
      })
    }
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
      RichUtils.toggleBlockType(this.state.editorState, blockType));

    setTimeout(this.updateSelection, 4)
  };

  toggleInlineStyle = (style) => {
    if (style != 'LINK'){
      return this.onEditorChange(
        RichUtils.toggleInlineStyle(this.state.editorState, style));
    }

    // Add a link
    const selection = this.state.editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }
    const href = window.prompt('Enter a URL');
    const entityKey = Entity.create('link', 'MUTABLE', {href});
    const content = this.state.editorState.getCurrentContent();   
    this.onEditorChange(
      RichUtils.toggleLink(this.state.editorState, selection, entityKey))

  };

  onEditorChange = (editorState) => {
    this.setState({editorState});
  };

  get = () => {
    const content = this.state.editorState.getCurrentContent()
    return convertToRaw(content)
  };

  insertBlock = (type, data) => {
    var editorState = insertMediaBlock(this.state.editorState, type, data)
    this.setState({
      editorState,
    })
  };

  insertBlockComponent = (type, data) => {

    // TODO cerate a componnet pool with type
    //var type = generateUniqueType()
    
    var { editorState, entityKey } = insertMediaBlock(this.state.editorState, type, data)
    this.setState({
      editorState,
    })

    return entityKey
  };

  getEditorState = () => {
    return this.state.editorState
  };

  /**
   * While editing TeX, set the Draft editor to read-only. This allows us to
   * have a textarea within the DOM.
   */
  render() {

    const { 
      iconColor, 
      iconSelectedColor,
      popoverStyle,
      ...otherProps, } = this.props

    var editorState = this.state.editorState
    //console.log(this.getContent())

    var currentInlineStyle = editorState.getCurrentInlineStyle();

    const selection = editorState.getSelection();
    const selectedBlockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    var sideControlStyles = Object.assign({}, styles.sideControl)
    if (this.props.readOnly != true && this.state.sideControlVisible){
      sideControlStyles.display = 'block'
      sideControlStyles.top = this.state.sideControlTop
      sideControlStyles.left = this.state.sideControlLeft
    }

    var popoverStyleLocal = Object.assign({}, styles.popOverControl)
    if (this.props.readOnly != true && this.state.popoverControlVisible){
      popoverStyleLocal.display = 'block'
      popoverStyleLocal.top = this.state.popoverControlTop
      popoverStyleLocal.left = this.state.popoverControlLeft
    }
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
        />
        <PopoverControl 
          style={popoverStyleLocal} 
          toggleInlineStyle={style => this.toggleInlineStyle(style)}
          editorState={editorState}
          iconSelectedColor={iconSelectedColor}
          iconColor={iconColor}
          updateEditorState={this.onEditorChange}
          ref="popoverControl"
        />
        <Editor
          {...otherProps}
          blockRendererFn={this._blockRenderer}
          editorState={this.state.editorState}
          handleKeyCommand={this._handleKeyCommand}
          onChange={this._onChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          ref="editor"
          spellCheck={true}
        />
        <input type="file" ref="fileInput" style={{display: 'none'}} 
          onChange={this.handleFileInput} />
      </div>
        
    );
  }
}
