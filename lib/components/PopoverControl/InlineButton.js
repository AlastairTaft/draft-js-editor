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
    width: 24,
    cursor: 'pointer',
    verticalAlign: 'middle'
  }
};

/**
 * Helper class to remove the boiler plate in getButtons. And make the 
 * getButtons function easier to read. 
 *
 * As a convenience this passes down the selected and fill props to the children
 * The selected prop is a boolean that's true if the highlighted text in the 
 * editor relates to the inlineStyleType and the fill is the icon colour. Will
 * match the iconColour or selectedIconColor based on the selected property.
 */

var InlineButton = function (_Component) {
  _inherits(InlineButton, _Component);

  function InlineButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InlineButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InlineButton.__proto__ || Object.getPrototypeOf(InlineButton)).call.apply(_ref, [this].concat(args))), _this), _this.isSelected = function (editorState, inlineStyleType) {

      // Check the editor is focused
      var selection = editorState.getSelection();
      var selectedBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
      if (!selectedBlock) return false;

      var currentInlineStyle = editorState.getCurrentInlineStyle();
      return currentInlineStyle.has(inlineStyleType);
    }, _this.render = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          updateEditorState = _this$props.updateEditorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          inlineStyleType = _this$props.inlineStyleType,
          otherProps = _objectWithoutProperties(_this$props, ['editorState', 'updateEditorState', 'iconColor', 'iconSelectedColor', 'inlineStyleType']);

      var selected = _this.isSelected(editorState, inlineStyleType);
      var fill = selected ? iconSelectedColor : iconColor;

      return _react2.default.createElement(
        'div',
        _extends({
          style: styles.iconContainer,
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            updateEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyleType));
          }
        }, otherProps),
        _react2.default.Children.map(_this.props.children, function (c) {
          return _react2.default.cloneElement(c, { fill: fill, selected: selected });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return InlineButton;
}(_react.Component);

InlineButton.propTypes = {

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
   * The inline style type this button is responsible for.
   */
  styleType: _react2.default.PropTypes.string
};
InlineButton.defaultProps = {
  selected: false
};
exports.default = InlineButton;