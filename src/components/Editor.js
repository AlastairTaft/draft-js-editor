import {ContentState, Editor, EditorState, RichUtils } from 'draft-js'
import React from 'react'
import ReactDOM from 'react-dom'
import DefaultSideControl from './SideControl/SideControl'
import PopoverControl from './PopoverControl/PopoverControl'
import MediaWrapper from './MediaWrapper.js'
import getUnboundedScrollPosition from 'fbjs/lib/getUnboundedScrollPosition.js'
import Style from 'fbjs/lib/Style.js'
import defaultDecorator from './defaultDecorator.js'
import defaultBlockRenderMap from './defaultBlockRenderMap'
import insertAtomicBlock from './../modifiers/insertAtomicBlock'

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

const isInDev = typeof process == 'undefined' 
  || typeof process.env == 'undefined'
  || process.env.NODE_ENV != 'production'

const styles = {
  editorContainer: {
    //position: 'relative',
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
    height: 38, // Required to figure out positioning
    //width: 48, // Needed to figure out how much to offset the sideControl left
    left: -40,
    display: 'none',
  }
}

const popoverSpacing = 3 // The distance above the selection that popover 
  // will display

class RichEditor extends React.Component {

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
    },
    iconColor: '#000000',
    iconSelectedColor: '#2000FF',
    //editorState: EditorState.createEmpty(defaultDecorator),
    onChange: function(){},
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

    /*if (props.editorState != null && 
      !(props.editorState instanceof EditorState))
     throw new Error('Invalid editorState')*/
    
    
    this.updateSelection = () => {
      
      var selectionRangeIsCollapsed = null,
        sideControlVisible = false,
        sideControlTop = null,
        sideControlLeft = styles.sideControl.left,
        popoverControlVisible = false,
        popoverControlTop = null,
        popoverControlLeft = null
      
      if (this.props.readOnly) return

      let selectionRange = getSelectionRange()
      if (!selectionRange) return

      var editorEle = ReactDOM.findDOMNode(this.editor_)
      if (!isParentOf(selectionRange.commonAncestorContainer, editorEle))
        return

      var popoverControlEle = ReactDOM.findDOMNode(this.popoverControl_)
      var sideControlEle = ReactDOM.findDOMNode(this.sideControl_)

      let rangeBounds = selectionRange.getBoundingClientRect()
      var selectedBlock = getSelectedBlockElement(selectionRange)
      if (selectedBlock){
        var blockBounds = selectedBlock.getBoundingClientRect()

        sideControlVisible = true
        //sideControlTop = this.state.selectedBlock.offsetTop

        var editorNode = ReactDOM.findDOMNode(this.editor_)
        if (!editorNode) return
        var editorBounds = editorNode.getBoundingClientRect()
        // Get offset parent that isn't a table cell
        
        var offsetParent = getNonTDOffsetParent(editorNode)
        var offsetParentBounds = offsetParent.getBoundingClientRect()

        sideControlTop = (blockBounds.top - offsetParentBounds.top)
          + ((blockBounds.bottom - blockBounds.top) / 2)
          - (styles.sideControl.height / 2)

        sideControlLeft = (blockBounds.left - offsetParentBounds.left)
          + styles.sideControl.left

        // If the side control is off the screen then put it above the block
        if ((blockBounds.left + sideControlLeft) < 0){
          sideControlLeft = 0
          sideControlTop = (blockBounds.top - offsetParentBounds.top)
            - (styles.sideControl.height)
        }

        // If it's off the top of the page
        if (sideControlTop < 0){
          sideControlTop = (blockBounds.top - offsetParentBounds.top)
            + ((blockBounds.bottom - blockBounds.top))
        }

        //console.log(require('util').inspect(sideControlTop))
        
        sideControlEle.style.left = sideControlLeft + 'px'
        sideControlEle.style.top = sideControlTop + 'px'
        sideControlEle.style.display = 'block'
  
        if (!selectionRange.collapsed){

          // The control needs to be visible so that we can get it's width
          popoverControlEle && (popoverControlEle.style.display = 'block')
          var popoverWidth = popoverControlEle && popoverControlEle.clientWidth

          // ----
          
          // ----
          //debugger
          popoverControlVisible = true
          var rangeWidth = rangeBounds.right - rangeBounds.left,
            rangeHeight = rangeBounds.bottom - rangeBounds.top
          popoverControlTop = ((rangeBounds.top - offsetParentBounds.top) /*- (editorBounds.top - offsetParentBounds.top)*/)
            - styles.popOverControl.height
            - popoverSpacing
          popoverControlLeft = 0
            + (rangeBounds.left - offsetParentBounds.left)
            + (rangeWidth / 2)
            - (/*styles.popOverControl.width*/ popoverWidth / 2)
          
          //console.log(popoverControlEle)
          //console.log(popoverControlEle.style)
          if (popoverControlEle){
            popoverControlEle.style.left = popoverControlLeft + 'px'
            popoverControlEle.style.top = popoverControlTop + 'px'
          }
        } else {
          if (popoverControlEle)
            popoverControlEle.style.display = 'none'
        }
      } else {
        sideControlEle.style.display = 'none'
        if (popoverControlEle)
          popoverControlEle.style.display = 'none'
      }
    };
    

  };

  _blockRenderer = (contentBlock) => {
    const type = contentBlock.getType()
    
    if (type === 'atomic') {
      const data = contentBlock.getData().toJS()
      const { blockTypes } = this.props
      var component = blockTypes[data.type]
      
      return {
        component,
        editable: false,
        props: {},
      }
    }
  }


  /**
   * This is needed, so that we can return true. Required to stop the event
   * bubbling up and then triggering handling for keyDown.
   */
  _handleKeyCommand = command => {
    var {editorState} = this.props;
    var newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this._onChange(newState);
      return true
    }
    return false
  };

  _onChange = (editorState) => this.props.onChange(editorState);

  // Removing focus as it interfers with third party onClick events
  focus = () => {
    if (this.props.readOnly) return

    var editorNode = ReactDOM.findDOMNode(this.editor_)
    
    // relative bounds, this is the distance before finding a node with position
    // relative.
    //
    
    //var relativeBounds = {
    //  left: editorBounds.left - offsetParentBounds.left, 
    //  top: editorBounds.top - offsetParentBounds.top,
    //}
    //debugger
    //var parent = editorNode.offsetParent
    

    /*this.setState({
      //editorBounds,
      editorBounds: Object.assign({}, offsetParentBounds, {top: topOffset}),
    })*/

    var scrollParent = Style.getScrollParent(editorNode);
    //console.log(`focus called: ${require('util').inspect(getUnboundedScrollPosition(scrollParent))}`)
    this.editor_.focus(getUnboundedScrollPosition(scrollParent));
    //this.refs.editor.focus();
  };

  insertBlock = (blockType) => {
    const { editorState } = this.props
    var newEditorState = insertAtomicBlock(editorState, { type: blockType })
    this._onChange(newEditorState)
  };

  // For backwards compatibility
  insertBlockComponent = (blockType, componentProps) => {
    if (isInDev && componentProps){
      console.warn(`The second componentProps parameter is not supported anymore
        if this breaks your workflow, please file an issue at 
        https://github.com/AlastairTaft/draft-js-editor`)
    }
    if (isInDev){
      console.warn(`insertBlockComponent is deprecated, use insertBlock instead.`)
    }
    return this.insertBlock(blockType)
  };

  componentDidUpdate = () => this.updateSelection();

  onEditorChange = (editorState) => {
    var { onChange } = this.props
    onChange(editorState)
  };

  onBlur = () => {
    var popoverControlEle = ReactDOM.findDOMNode(this.popoverControl_)
    var sideControlEle = ReactDOM.findDOMNode(this.sideControl_)
    if (popoverControlEle) popoverControlEle.style.display = 'none'
    sideControlEle.style.display = 'none'
    const { onBlur } = this.props
    if (onBlur)
      onBlur.apply(this, arguments)
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
      placeholder,
      showInlineButtons,
      SideControl,
      ...otherProps, } = this.props

    if (!editorState){
      editorState = EditorState.createEmpty(defaultDecorator)
      this._onChange(editorState)
    }

    if (!SideControl)
      SideControl = DefaultSideControl

    /*const selectedBlock = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())

    if (selectedBlock){
      var selectedBlockType = selectedBlock.getType()
      var currentInlineStyle = editorState.getCurrentInlineStyle()
    }
    const selection = editorState.getSelection()*/
    

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
        className={this.props.className} 
          onClick={placeholder ? this.focus : undefined}
        >
        <SideControl style={sideControlStyles} 
          iconSelectedColor={iconSelectedColor}
          iconColor={iconColor}
          popoverStyle={popoverStyle}
          //ref="sideControl"
          ref={el => this.sideControl_ = el}
          buttons={blockButtons}
          editorState={editorState}
          updateEditorState={this.onEditorChange}
        />
        {showInlineButtons === false ? null : <PopoverControl 
          style={popoverStyleLocal} 
          editorState={editorState}
          iconSelectedColor={iconSelectedColor}
          iconColor={iconColor}
          updateEditorState={this.onEditorChange}
          //ref="popoverControl"
          ref={el => this.popoverControl_ = el}
          buttons={inlineButtons}
        />}
        <Editor
          blockRendererFn={this._blockRenderer}
          blockRenderMap={defaultBlockRenderMap}
          spellCheck={true}
          handleKeyCommand={this._handleKeyCommand}
          placeholder={placeholder}
          {...otherProps}
          editorState={editorState}
          onChange={this._onChange}
          //ref="editor"
          ref={el => this.editor_ = el}
          onBlur={this.onBlur}
        />
      </div>
        
    );
  }
}

function getNonTDOffsetParent(ele){
  var parent = ele.offsetParent
  while (
    (parent.style.position != 'relative' && parent != document.body)
    && (parent.tagName == 'TH' || parent.tagName == 'TD' || parent.tagName == 'TABLE')
  ){

    parent = parent.offsetParent
  }
  return parent
}

export default RichEditor
