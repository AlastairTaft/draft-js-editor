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
      _extends({}, props, { blockType: 'code-block', className: 'DraftJsEditor-code-block' }),
      _react2.default.createElement(
         'svg',
         { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
         _react2.default.createElement('path', { d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' })
      )
   );
};