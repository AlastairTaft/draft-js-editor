'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertAtomicBlock = exports.defaultDecorator = exports.defaultBlockButtons = exports.defaultInlineButtons = undefined;

var _Editor = require('./components/Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _defaultButtons = require('./components/PopoverControl/defaultButtons.js');

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

var _defaultButtons3 = require('./components/SideControl/defaultButtons.js');

var _defaultButtons4 = _interopRequireDefault(_defaultButtons3);

var _defaultDecorator2 = require('./components/defaultDecorator.js');

var _defaultDecorator3 = _interopRequireDefault(_defaultDecorator2);

var _insertAtomicBlock2 = require('./modifiers/insertAtomicBlock');

var _insertAtomicBlock3 = _interopRequireDefault(_insertAtomicBlock2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.defaultInlineButtons = _defaultButtons2.default;
exports.defaultBlockButtons = _defaultButtons4.default;
exports.defaultDecorator = _defaultDecorator3.default;
exports.insertAtomicBlock = _insertAtomicBlock3.default;
exports.default = _Editor2.default;