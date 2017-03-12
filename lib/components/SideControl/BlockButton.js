'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  iconContainer: {
    display: 'inline-block',
    height: 24,
    width: 24
  }
};

var BlockButton = function (_Component) {
  _inherits(BlockButton, _Component);

  function BlockButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BlockButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockButton.__proto__ || Object.getPrototypeOf(BlockButton)).call.apply(_ref, [this].concat(args))), _this), _this.isSelected = function (editorState, blockType) {
      var selection = editorState.getSelection();
      var selectedBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
      if (!selectedBlock) return false;
      var selectedBlockType = selectedBlock.getType();
      return selectedBlockType == blockType;
    }, _this.render = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          blockType = _this$props.blockType,
          children = _this$props.children,
          updateEditorState = _this$props.updateEditorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          otherProps = _objectWithoutProperties(_this$props, ['editorState', 'blockType', 'children', 'updateEditorState', 'iconColor', 'iconSelectedColor']);

      var selected = _this.isSelected(editorState, blockType);
      var fill = selected ? iconSelectedColor : iconColor;

      return _react2.default.createElement(
        'div',
        _extends({
          style: styles.iconContainer,
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            updateEditorState(_draftJs.RichUtils.toggleBlockType(editorState, blockType));
          }
        }, otherProps),
        _react2.default.Children.map(_this.props.children, function (c) {
          return _react2.default.cloneElement(c, { fill: fill, selected: selected });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return BlockButton;
}(_react.Component);

BlockButton.propTypes = {

  /**
   * The icon colour. This gets passed down from the Editor.
   */
  iconColor: _react2.default.PropTypes.string,

  /**
   * The icon colour when selected. This gets passed down from the Editor.
   */
  iconSelectedColor: _react2.default.PropTypes.string,

  /**
   * The current editorState. This gets passed down from the editor.
   */
  editorState: _react2.default.PropTypes.object,

  /**
   * A method that can be called to update the editor's editorState. This 
   * gets passed down from the editor.
   */
  updateEditorState: _react2.default.PropTypes.func,

  /**
   * The block type this button is responsible for.
   */
  blockType: _react2.default.PropTypes.string
};
exports.default = BlockButton;