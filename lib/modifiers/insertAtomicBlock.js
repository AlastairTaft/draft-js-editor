/**
 * Copyright (c) 2013-present, Facebook, Inc. All rights reserved.
 *
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertAtomicBlock;

var _immutable = require('immutable');

var _draftJs = require('draft-js');

function insertAtomicBlock(editorState, data) {

  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();

  var afterRemoval = _draftJs.Modifier.removeRange(contentState, selectionState, 'backward');

  var targetSelection = afterRemoval.getSelectionAfter();
  var afterSplit = _draftJs.Modifier.splitBlock(afterRemoval, targetSelection);
  var insertionTarget = afterSplit.getSelectionAfter();

  var asMedia = _draftJs.Modifier.setBlockType(afterSplit, insertionTarget, 'atomic');

  var entityKey = _draftJs.Entity.create('TOKEN', 'IMMUTABLE', data);

  var charData = _draftJs.CharacterMetadata.create({ entity: entityKey });

  var fragmentArray = [new _draftJs.ContentBlock({
    key: (0, _draftJs.genKey)(),
    type: 'atomic',
    text: data.text || ' ',
    characterList: (0, _immutable.List)((0, _immutable.Repeat)(charData, (data.text || ' ').length)),
    data: data
  }), new _draftJs.ContentBlock({
    key: (0, _draftJs.genKey)(),
    type: 'unstyled',
    text: '',
    characterList: (0, _immutable.List)()
  })];

  var fragment = _draftJs.BlockMapBuilder.createFromArray(fragmentArray);

  var withMedia = _draftJs.Modifier.replaceWithFragment(asMedia, insertionTarget, fragment);

  var newContent = withMedia.merge({
    selectionBefore: selectionState,
    selectionAfter: withMedia.getSelectionAfter().set('hasFocus', true)
  });

  var editorState = _draftJs.EditorState.push(editorState, newContent, 'insert-fragment');

  return editorState;
}