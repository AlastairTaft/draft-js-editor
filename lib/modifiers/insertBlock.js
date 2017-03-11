'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertBlock;

var _insertAtomicBlock = require('./insertAtomicBlock');

var _insertAtomicBlock2 = _interopRequireDefault(_insertAtomicBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insertBlock(editorState, blockType) {
  return (0, _insertAtomicBlock2.default)(editorState, { type: blockType });
} /**
   * This is a wrapper around the insert atomic block that puts the type in 
   * the atomic blocks data object.
   */