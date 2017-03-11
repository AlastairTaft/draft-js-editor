'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var blockRenderMap = (0, _immutable.Map)({
  'atomic': {
    // The only reason for overriding the blockRenderMap is to change the
    // atomic element from a 'figure' to a div.
    element: 'div'
  }
});

var extendedBlockRenderMap = _draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap);

exports.default = extendedBlockRenderMap;