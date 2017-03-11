'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InlineButton = require('./InlineButton.js');

var _InlineButton2 = _interopRequireDefault(_InlineButton);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleLink = function toggleLink(editorState) {

  // Add a link
  var selection = editorState.getSelection();
  if (selection.isCollapsed()) {
    return;
  }

  var href = window.prompt('Enter a URL') || "";

  if (href && !href.startsWith("http://") && !href.startsWith("https://")) {
    href = "http://" + href;
  }

  var entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { href: href, url: href });
  var content = editorState.getCurrentContent();
  return _draftJs.RichUtils.toggleLink(editorState, selection, entityKey);
};

exports.default = function (props) {
  return _react2.default.createElement(
    _InlineButton2.default,
    _extends({}, props, {
      inlineStyleType: 'LINK',
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.updateEditorState(toggleLink(props.editorState));
      },
      className: 'DraftJsEditor-LinkButton'
    }),
    _react2.default.createElement(
      'svg',
      { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z' })
    )
  );
};