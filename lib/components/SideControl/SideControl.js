'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MoreOptions = require('./MoreOptions');

var _MoreOptions2 = _interopRequireDefault(_MoreOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: 999
	}
};

var SideControl = function (_Component) {
	_inherits(SideControl, _Component);

	function SideControl() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SideControl);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideControl.__proto__ || Object.getPrototypeOf(SideControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			moreOptionsVisible: false
		}, _this.render = function () {
			var _this$props = _this.props,
			    iconColor = _this$props.iconColor,
			    iconSelectedColor = _this$props.iconSelectedColor,
			    popoverStyle = _this$props.popoverStyle,
			    buttons = _this$props.buttons,
			    editorState = _this$props.editorState,
			    updateEditorState = _this$props.updateEditorState;


			return _react2.default.createElement(
				'div',
				{
					style: Object.assign({}, styles.container, _this.props.style)
				},
				_react2.default.createElement(
					'div',
					{
						style: { display: 'inline-block', cursor: 'pointer' },
						onMouseOut: function onMouseOut(e) {
							_this.setState({
								moreOptionsVisible: false
							});
						},
						onMouseOver: function onMouseOver(e) {
							_this.setState({
								moreOptionsVisible: true
							});
						},
						className: 'DraftJsEditor-more-options'
					},
					_react2.default.createElement(
						'svg',
						{
							onMouseDown: function onMouseDown(e) {
								return e.preventDefault();
							},
							fill: iconColor, height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
						_react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
						_react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
					),
					_react2.default.createElement(_MoreOptions2.default, {
						style: Object.assign({}, popoverStyle, {
							display: _this.state.moreOptionsVisible ? 'block' : 'none'
						}),
						toggleBlockType: _this.props.toggleBlockType,
						selectedBlockType: _this.props.selectedBlockType,
						iconSelectedColor: iconSelectedColor,
						iconColor: iconColor,
						buttons: buttons,
						editorState: editorState,
						updateEditorState: updateEditorState
					})
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return SideControl;
}(_react.Component);

SideControl.propTypes = {
	style: _react2.default.PropTypes.object,
	onImageClick: _react2.default.PropTypes.func,
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
  * Override the inline styles for the popover component.
  */
	popoverStyle: _react2.default.PropTypes.object,

	/**
  * Override the block buttons.
  */
	buttons: _react2.default.PropTypes.array
};
SideControl.defaultProps = {
	iconColor: '#000000',
	iconSelectedColor: '#2000FF'
};
exports.default = SideControl;