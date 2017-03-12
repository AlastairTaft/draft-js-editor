'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultButtons = require('./defaultButtons.js');

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //border: '1px solid rgba(204, 204, 204, 0.5);',
    borderRadius: 5
  }
};

var PopoverControl = function (_Component) {
  _inherits(PopoverControl, _Component);

  function PopoverControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoverControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoverControl.__proto__ || Object.getPrototypeOf(PopoverControl)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          updateEditorState = _this$props.updateEditorState,
          editorState = _this$props.editorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          buttons = _this$props.buttons;


      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, styles.container, _this.props.style)
        },
        (buttons || _defaultButtons2.default).map(function (button) {
          return _react2.default.cloneElement(button, {
            // Pass down some useful props to each button
            updateEditorState: updateEditorState,
            editorState: editorState,
            iconColor: iconColor,
            iconSelectedColor: iconSelectedColor
          });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PopoverControl;
}(_react.Component);

PopoverControl.propTypes = {
  /**
   * The popover container style
   */
  style: _react2.default.PropTypes.object,

  toggleInlineStyle: _react2.default.PropTypes.func,
  currentInlineStyle: _react2.default.PropTypes.object,

  /**
   * The icon fill colour
   */
  iconColor: _react2.default.PropTypes.string,

  /**
   * The icon fill colour when selected
   */
  iconSelectedColor: _react2.default.PropTypes.string,

  /**
   * The current editorState
   */
  editorState: _react2.default.PropTypes.object,

  /**
   * Can call this to update the editor state
   */
  updateEditorState: _react2.default.PropTypes.func,

  /**
   * The inline buttons to use, if this is omitted will use the default
   * buttons, bold, italic and link.
   */
  buttons: _react2.default.PropTypes.array
};
PopoverControl.defaultProps = {
  iconColor: '#000000',
  iconSelectedColor: '#2000FF'
};
exports.default = PopoverControl;