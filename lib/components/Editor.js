'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = require('draft-js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SideControl = require('./SideControl/SideControl');

var _SideControl2 = _interopRequireDefault(_SideControl);

var _PopoverControl = require('./PopoverControl/PopoverControl');

var _PopoverControl2 = _interopRequireDefault(_PopoverControl);

var _MediaWrapper = require('./MediaWrapper.js');

var _MediaWrapper2 = _interopRequireDefault(_MediaWrapper);

var _getUnboundedScrollPosition = require('fbjs/lib/getUnboundedScrollPosition.js');

var _getUnboundedScrollPosition2 = _interopRequireDefault(_getUnboundedScrollPosition);

var _Style = require('fbjs/lib/Style.js');

var _Style2 = _interopRequireDefault(_Style);

var _defaultDecorator = require('./defaultDecorator.js');

var _defaultDecorator2 = _interopRequireDefault(_defaultDecorator);

var _defaultBlockRenderMap = require('./defaultBlockRenderMap');

var _defaultBlockRenderMap2 = _interopRequireDefault(_defaultBlockRenderMap);

var _insertAtomicBlock = require('./../modifiers/insertAtomicBlock');

var _insertAtomicBlock2 = _interopRequireDefault(_insertAtomicBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSelectedBlockElement = function getSelectedBlockElement(range) {
  var node = range.startContainer;
  do {
    if (node.getAttribute && node.getAttribute('data-block') == 'true') return node;
    node = node.parentNode;
  } while (node != null);
  return null;
  /*const currentContent = this.props.editorState.getCurrentContent()
  const selection = this.props.editorState.getSelection()
  return currentContent.getBlockForKey(selection.getStartKey())*/
};

var getSelectionRange = function getSelectionRange() {
  var selection = window.getSelection();
  if (selection.rangeCount == 0) return null;
  return selection.getRangeAt(0);
};

var isParentOf = function isParentOf(ele, maybeParent) {

  while (ele.parentNode != null && ele.parentNode != document.body) {
    if (ele.parentNode == maybeParent) return true;
    ele = ele.parentNode;
  }
  return false;
};

var isInDev = typeof process == 'undefined' || typeof process.env == 'undefined' || process.env.NODE_ENV != 'production';

var styles = {
  editorContainer: {
    position: 'relative'
  },
  popOverControl: {
    //width: 78, // Height and width are needed to compute the position
    height: 24,
    display: 'none',
    position: 'absolute',
    zIndex: 999
  },
  sideControl: {
    height: 24, // Required to figure out positioning
    //width: 48, // Needed to figure out how much to offset the sideControl left
    left: -24,
    display: 'none'
  }
};

var popoverSpacing = 3; // The distance above the selection that popover 
// will display

var RichEditor = function (_React$Component) {
  _inherits(RichEditor, _React$Component);

  function RichEditor(props) {
    var _arguments = arguments;

    _classCallCheck(this, RichEditor);

    var _this = _possibleConstructorReturn(this, (RichEditor.__proto__ || Object.getPrototypeOf(RichEditor)).call(this, props));

    _this.state = {};

    _this._blockRenderer = function (contentBlock) {
      var type = contentBlock.getType();

      if (type === 'atomic') {
        var data = contentBlock.getData().toJS();
        var blockTypes = _this.props.blockTypes;

        var component = blockTypes[data.type];

        return {
          component: component,
          editable: false,
          props: {}
        };
      }
    };

    _this._handleKeyCommand = function (command) {
      var editorState = _this.props.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _this._onChange(newState);
        return true;
      }
      return false;
    };

    _this._onChange = function (editorState) {
      return _this.props.onChange(editorState);
    };

    _this.focus = function () {
      if (_this.props.readOnly) return;

      var editorNode = _reactDom2.default.findDOMNode(_this.refs['editor']);
      var editorBounds = editorNode.getBoundingClientRect();
      _this.setState({
        editorBounds: editorBounds
      });

      var scrollParent = _Style2.default.getScrollParent(editorNode);
      //console.log(`focus called: ${require('util').inspect(getUnboundedScrollPosition(scrollParent))}`)
      _this.refs.editor.focus((0, _getUnboundedScrollPosition2.default)(scrollParent));
      //this.refs.editor.focus();
    };

    _this.insertBlock = function (blockType) {
      var editorState = _this.props.editorState;

      var newEditorState = (0, _insertAtomicBlock2.default)(editorState, { type: blockType });
      _this._onChange(newEditorState);
    };

    _this.insertBlockComponent = function (blockType, componentProps) {
      if (isInDev && componentProps) {
        console.warn('The second componentProps parameter is not supported anymore\n        if this breaks your workflow, please file an issue at \n        https://github.com/AlastairTaft/draft-js-editor');
      }
      if (isInDev) {
        console.warn('insertBlockComponent is deprecated, use insertBlock instead.');
      }
      return _this.insertBlock(blockType);
    };

    _this.componentDidUpdate = function () {
      return _this.updateSelection();
    };

    _this.onEditorChange = function (editorState) {
      var onChange = _this.props.onChange;

      onChange(editorState);
    };

    _this.onBlur = function () {
      var popoverControlEle = _reactDom2.default.findDOMNode(_this.refs['popoverControl']);
      var sideControlEle = _reactDom2.default.findDOMNode(_this.refs['sideControl']);
      popoverControlEle.style.display = 'none';
      sideControlEle.style.display = 'none';
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur.apply(_this, _arguments);
    };

    if (props.decorator) throw new Error('Passing in a decorator is deprecated, you must first \n        create an editorState object using your decorator and pass in that\n        editorState object instead. e.g. EditorState.createEmpty(decorator)');

    if (props.editorState instanceof _draftJs.ContentState) throw new Error('You passed in a ContentState object when an EditorState \n        object was expected, use EditorState.createWithContent first.');

    /*if (props.editorState != null && 
      !(props.editorState instanceof EditorState))
     throw new Error('Invalid editorState')*/

    _this.updateSelection = function () {

      var selectionRangeIsCollapsed = null,
          sideControlVisible = false,
          sideControlTop = null,
          sideControlLeft = styles.sideControl.left,
          popoverControlVisible = false,
          popoverControlTop = null,
          popoverControlLeft = null;

      var selectionRange = getSelectionRange();
      if (!selectionRange) return;

      var editorEle = _reactDom2.default.findDOMNode(_this.refs['editor']);
      if (!isParentOf(selectionRange.commonAncestorContainer, editorEle)) return;

      var popoverControlEle = _reactDom2.default.findDOMNode(_this.refs['popoverControl']);
      var sideControlEle = _reactDom2.default.findDOMNode(_this.refs['sideControl']);

      var rangeBounds = selectionRange.getBoundingClientRect();
      var selectedBlock = getSelectedBlockElement(selectionRange);
      if (selectedBlock) {
        var blockBounds = selectedBlock.getBoundingClientRect();

        sideControlVisible = true;
        //sideControlTop = this.state.selectedBlock.offsetTop
        var editorBounds = _this.state.editorBounds;
        if (!editorBounds) return;
        var sideControlTop = blockBounds.top - editorBounds.top + (blockBounds.bottom - blockBounds.top) / 2 - styles.sideControl.height / 2;

        //console.log(require('util').inspect(sideControlTop))

        sideControlEle.style.left = sideControlLeft + 'px';
        sideControlEle.style.top = sideControlTop + 'px';
        sideControlEle.style.display = 'block';

        if (!selectionRange.collapsed) {

          // The control needs to be visible so that we can get it's width
          popoverControlEle.style.display = 'block';
          var popoverWidth = popoverControlEle.clientWidth;

          popoverControlVisible = true;
          var rangeWidth = rangeBounds.right - rangeBounds.left,
              rangeHeight = rangeBounds.bottom - rangeBounds.top;
          popoverControlTop = rangeBounds.top - editorBounds.top - styles.popOverControl.height - popoverSpacing;
          popoverControlLeft = 0 + (rangeBounds.left - editorBounds.left) + rangeWidth / 2 - /*styles.popOverControl.width*/popoverWidth / 2;

          //console.log(popoverControlEle)
          //console.log(popoverControlEle.style)
          popoverControlEle.style.left = popoverControlLeft + 'px';
          popoverControlEle.style.top = popoverControlTop + 'px';
        } else {
          popoverControlEle.style.display = 'none';
        }
      } else {
        sideControlEle.style.display = 'none';
        popoverControlEle.style.display = 'none';
      }
    };

    return _this;
  }

  /**
   * This is needed, so that we can return true. Required to stop the event
   * bubbling up and then triggering handling for keyDown.
   */


  // For backwards compatibility


  _createClass(RichEditor, [{
    key: 'render',


    /**
     * While editing TeX, set the Draft editor to read-only. This allows us to
     * have a textarea within the DOM.
     */
    value: function render() {
      var _props = this.props,
          iconColor = _props.iconColor,
          iconSelectedColor = _props.iconSelectedColor,
          popoverStyle = _props.popoverStyle,
          inlineButtons = _props.inlineButtons,
          blockButtons = _props.blockButtons,
          editorState = _props.editorState,
          otherProps = _objectWithoutProperties(_props, ['iconColor', 'iconSelectedColor', 'popoverStyle', 'inlineButtons', 'blockButtons', 'editorState']);

      if (!editorState) {
        editorState = _draftJs.EditorState.createEmpty(_defaultDecorator2.default);
        this._onChange(editorState);
      }

      /*const selectedBlock = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
       if (selectedBlock){
        var selectedBlockType = selectedBlock.getType()
        var currentInlineStyle = editorState.getCurrentInlineStyle()
      }
      const selection = editorState.getSelection()*/

      var sideControlStyles = Object.assign({}, styles.sideControl);
      /*if (this.props.readOnly != true && this.state.sideControlVisible){
        sideControlStyles.display = 'block'
      }*/

      var popoverStyleLocal = Object.assign({}, styles.popOverControl);
      /*if (this.props.readOnly != true && this.state.popoverControlVisible){
        popoverStyleLocal.display = 'block'
      }*/
      Object.assign(popoverStyleLocal, popoverStyle);

      return _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.editorContainer, this.props.style),
          className: this.props.className, onClick: this.focus },
        _react2.default.createElement(_SideControl2.default, { style: sideControlStyles,
          iconSelectedColor: iconSelectedColor,
          iconColor: iconColor,
          popoverStyle: popoverStyle,
          ref: 'sideControl',
          buttons: blockButtons,
          editorState: editorState,
          updateEditorState: this.onEditorChange
        }),
        _react2.default.createElement(_PopoverControl2.default, {
          style: popoverStyleLocal,
          editorState: editorState,
          iconSelectedColor: iconSelectedColor,
          iconColor: iconColor,
          updateEditorState: this.onEditorChange,
          ref: 'popoverControl',
          buttons: inlineButtons
        }),
        _react2.default.createElement(_draftJs.Editor, _extends({
          blockRendererFn: this._blockRenderer,
          blockRenderMap: _defaultBlockRenderMap2.default,
          spellCheck: true,
          handleKeyCommand: this._handleKeyCommand
        }, otherProps, {
          editorState: editorState,
          onChange: this._onChange,
          ref: 'editor',
          onBlur: this.onBlur
        }))
      );
    }
  }]);

  return RichEditor;
}(_react2.default.Component);

RichEditor.propTypes = {
  blockTypes: _react2.default.PropTypes.object,
  readOnly: _react2.default.PropTypes.bool,
  /**
   * The root component class name.
   */
  className: _react2.default.PropTypes.string,

  /**
   * The icon fill colour
   */
  iconColor: _react2.default.PropTypes.string,

  /**
   * The icon fill colour when selected
   */
  iconSelectedColor: _react2.default.PropTypes.string,

  /**
   * Override the inline styles for the popover component.
   */
  popoverStyle: _react2.default.PropTypes.object,

  /**
   * Override the inline buttons, these are displayed in the popover control.
   */
  inlineButtons: _react2.default.PropTypes.array,

  /**
   * Override the block buttons, these are displayed in the "more options" 
   * side control.
   */
  blockButtons: _react2.default.PropTypes.array
};
RichEditor.defaultProps = {
  blockTypes: {},
  iconColor: '#000000',
  iconSelectedColor: '#2000FF',
  //editorState: EditorState.createEmpty(defaultDecorator),
  onChange: function onChange() {}
};
exports.default = RichEditor;