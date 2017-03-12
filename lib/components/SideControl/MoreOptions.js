'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultButtons = require('./defaultButtons');

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var popoverSpacing = 3; // The distance above the selection that popover 
// will display

var styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: -24 - popoverSpacing,
		//width: 24 * 6,
		height: 24 + popoverSpacing,
		zIndex: 998,
		whiteSpace: 'nowrap'
	},
	innerContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		//border: '1px solid rgba(204, 204, 204, 0.5);',
		borderRadius: 5,
		height: 24
	},
	iconContainer: {
		display: 'inline-block',
		height: 24,
		width: 24
	},
	selectedIconContainer: {}
};

var MoreOptions = function (_Component) {
	_inherits(MoreOptions, _Component);

	function MoreOptions() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, MoreOptions);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoreOptions.__proto__ || Object.getPrototypeOf(MoreOptions)).call.apply(_ref, [this].concat(args))), _this), _this.toggleBlockType = function (blockType) {
			if (_this.props.toggleBlockType) _this.props.toggleBlockType(blockType);
		}, _this.render = function () {
			var _this$props = _this.props,
			    iconColor = _this$props.iconColor,
			    iconSelectedColor = _this$props.iconSelectedColor,
			    style = _this$props.style,
			    buttons = _this$props.buttons,
			    updateEditorState = _this$props.updateEditorState,
			    editorState = _this$props.editorState;


			return _react2.default.createElement(
				'div',
				{ style: Object.assign({}, styles.container) },
				_react2.default.createElement(
					'div',
					{ style: Object.assign({}, styles.innerContainer, style) },
					(buttons || _defaultButtons2.default).map(function (button) {
						return _react2.default.cloneElement(button, {
							// Pass down some useful props to each button
							updateEditorState: updateEditorState,
							editorState: editorState,
							iconColor: iconColor,
							iconSelectedColor: iconSelectedColor
						});
					})
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return MoreOptions;
}(_react.Component);

MoreOptions.propTypes = {
	/**
    * Override the inline styles for the container.
    */
	style: _react2.default.PropTypes.object,

	toggleBlockType: _react2.default.PropTypes.func,
	selectedBlockType: _react2.default.PropTypes.string,

	/**
  * The icon fill colour
  */
	iconColor: _react2.default.PropTypes.string,

	/**
  * The icon fill colour when selected
  */
	iconSelectedColor: _react2.default.PropTypes.string,

	/**
  * Override the block buttons.
  */
	buttons: _react2.default.PropTypes.array
};
MoreOptions.defaultProps = {
	iconColor: '#000000',
	iconSelectedColor: '#2000FF'
};
exports.default = MoreOptions;