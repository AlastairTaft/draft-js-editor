'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockButton = require('./BlockButton');

var _BlockButton2 = _interopRequireDefault(_BlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
   return _react2.default.createElement(
      _BlockButton2.default,
      _extends({}, props, { blockType: 'header-two', className: 'DraftJsEditor-header-two' }),
      _react2.default.createElement(
         'svg',
         { height: '24', viewBox: '-3 -6 30 30', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', { d: 'M5 4v3h5.5v12h3V7H19V4z' }),
         _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
      )
   );
};