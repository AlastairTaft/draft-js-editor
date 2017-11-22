'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && (_draftJs.Entity.get(entityKey).getType() === 'LINK'
    // For backward compatibility
    || _draftJs.Entity.get(entityKey).getType() === 'link');
  }, callback);
}

var Link = function Link(props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData(),
      href = _Entity$get$getData.href;

  return _react2.default.createElement(
    'a',
    { href: href },
    props.children
  );
};

var decorator = new _draftJs.CompositeDecorator([{
  strategy: findLinkEntities,
  component: Link
}]);

exports.default = decorator;