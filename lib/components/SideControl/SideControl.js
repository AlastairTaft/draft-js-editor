'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
	},
	inner: {
		display: 'inline-block',
		cursor: 'pointer',
		width: 24,
		height: 24,
		border: '1px solid #ddd',
		padding: 6,
		borderRadius: '50%',
		backgroundColor: 'white'
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
		}, _this.onMouseOut = function (e) {

			// We only care when it mouse's out the container div
			if (e.target != _this.moreOptionsDiv_) return;

			var _this$state = _this.state,
			    clientX = _this$state.clientX,
			    clientY = _this$state.clientY;


			var angle = Math.atan2(e.clientY - clientY, e.clientX - clientX) * 180 / Math.PI;

			if (angle < 0 && angle >= -90) {
				_this.setState({ moreOptionsVisibleTimeout: true });
				setTimeout(function () {
					return _this.hideMoreOptionsTimeoutCallback();
				}, 1000);
			} else {
				_this.setState({
					moreOptionsVisibleTimeout: false,
					moreOptionsVisible: false
				});
			}
		}, _this.hideMoreOptionsTimeoutCallback = function () {
			var moreOptionsVisibleTimeout = _this.state.moreOptionsVisibleTimeout;

			if (moreOptionsVisibleTimeout) _this.setState({
				moreOptionsVisible: false
			});
		}, _this.onMouseMove = function (e) {
			_this.setState({
				clientX: e.clientX,
				clientY: e.clientY
			});
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
						style: styles.inner,
						onMouseOut: _this.onMouseOut,
						onMouseMove: _this.onMouseMove,
						onMouseOver: function onMouseOver(e) {
							_this.setState({
								moreOptionsVisible: true
							});
						},
						className: 'DraftJsEditor-more-options',
						ref: function ref(el) {
							return _this.moreOptionsDiv_ = el;
						}
					},
					_react2.default.createElement(
						'svg',
						{
							onMouseDown: function onMouseDown(e) {
								return e.preventDefault();
							},
							fill: iconColor, height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
						_react2.default.createElement(
							'defs',
							null,
							_react2.default.createElement('path', { d: 'M24 24H0V0h24v24z', id: 'a' })
						),
						_react2.default.createElement(
							'clipPath',
							{ id: 'b' },
							_react2.default.createElement('use', { overflow: 'visible' })
						),
						_react2.default.createElement('path', { clipPath: 'url(#b)', d: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z' })
					),
					_react2.default.createElement(_MoreOptions2.default, {
						style: Object.assign({}, popoverStyle, {
							display: _this.state.moreOptionsVisible ? 'block' : 'none'
						}),
						toggleBlockType: _this.props.toggleBlockType
						//selectedBlockType={this.props.selectedBlockType}
						, iconSelectedColor: iconSelectedColor,
						iconColor: iconColor,
						buttons: buttons,
						editorState: editorState,
						updateEditorState: updateEditorState,
						onMouseOver: function onMouseOver(e) {
							_this.setState({
								moreOptionsVisible: true,
								moreOptionsVisibleTimeout: false
							});
						},
						onMouseOut: function onMouseOut(e) {
							_this.setState({
								moreOptionsVisible: false
							});
						}
					})
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return SideControl;
}(_react.Component);

SideControl.propTypes = {
	style: _propTypes2.default.object,
	onImageClick: _propTypes2.default.func,
	toggleBlockType: _propTypes2.default.func,
	//selectedBlockType: React.PropTypes.string,

	/**
  * The icon fill colour
  */
	iconColor: _propTypes2.default.string,

	/**
  * The icon fill colour when selected
  */
	iconSelectedColor: _propTypes2.default.string,

	/**
  * Override the inline styles for the popover component.
  */
	popoverStyle: _propTypes2.default.object,

	/**
  * Override the block buttons.
  */
	buttons: _propTypes2.default.array
};
SideControl.defaultProps = {
	iconColor: '#000000',
	iconSelectedColor: '#2000FF'
};
exports.default = SideControl;