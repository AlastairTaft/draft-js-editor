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

import {List, Repeat} from 'immutable';
import {
  BlockMapBuilder,
  CharacterMetadata,
  ContentBlock,
  EditorState,
  Entity,
  Modifier,
  genKey,
} from 'draft-js';

export default function insertAtomicBlock(editorState, data) {

  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();

  var afterRemoval = Modifier.removeRange(
    contentState,
    selectionState,
    'backward'
  );

  var targetSelection = afterRemoval.getSelectionAfter();
  var afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);
  var insertionTarget = afterSplit.getSelectionAfter();

  var asMedia = Modifier.setBlockType(afterSplit, insertionTarget, 'atomic')

  var entityKey = Entity.create(
    'TOKEN',
    'IMMUTABLE',
    data,
  );

  var charData = CharacterMetadata.create({entity: entityKey});

  var fragmentArray = [
    new ContentBlock({
      key: genKey(),
      type: 'atomic',
      text: data.text || ' ',
      characterList: List(Repeat(charData, (data.text || ' ').length)),
      data,
    }),
    new ContentBlock({
      key: genKey(),
      type: 'unstyled',
      text: '',
      characterList: List(),
    }),
  ];

  var fragment = BlockMapBuilder.createFromArray(fragmentArray);

  var withMedia = Modifier.replaceWithFragment(
    asMedia,
    insertionTarget,
    fragment
  );

  var newContent = withMedia.merge({
    selectionBefore: selectionState,
    selectionAfter: withMedia.getSelectionAfter().set('hasFocus', true),
  });

  var editorState = EditorState.push(editorState, newContent, 'insert-fragment')

  return editorState
}


