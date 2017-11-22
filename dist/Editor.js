var Editor =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Draft;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  iconContainer: {
    display: 'inline-block',
    height: 24,
    width: 24
  }
};

var BlockButton = function (_Component) {
  _inherits(BlockButton, _Component);

  function BlockButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BlockButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockButton.__proto__ || Object.getPrototypeOf(BlockButton)).call.apply(_ref, [this].concat(args))), _this), _this.isSelected = function (editorState, blockType) {
      var selection = editorState.getSelection();
      var selectedBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
      if (!selectedBlock) return false;
      var selectedBlockType = selectedBlock.getType();
      return selectedBlockType == blockType;
    }, _this.render = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          blockType = _this$props.blockType,
          children = _this$props.children,
          updateEditorState = _this$props.updateEditorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          otherProps = _objectWithoutProperties(_this$props, ['editorState', 'blockType', 'children', 'updateEditorState', 'iconColor', 'iconSelectedColor']);

      var selected = _this.isSelected(editorState, blockType);
      var fill = selected ? iconSelectedColor : iconColor;

      return _react2.default.createElement(
        'div',
        _extends({
          style: styles.iconContainer,
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            updateEditorState(_draftJs.RichUtils.toggleBlockType(editorState, blockType));
          }
        }, otherProps),
        _react2.default.Children.map(_this.props.children, function (c) {
          return _react2.default.cloneElement(c, { fill: fill, selected: selected });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return BlockButton;
}(_react.Component);

BlockButton.propTypes = {

  /**
   * The icon colour. This gets passed down from the Editor.
   */
  iconColor: _propTypes2.default.string,

  /**
   * The icon colour when selected. This gets passed down from the Editor.
   */
  iconSelectedColor: _propTypes2.default.string,

  /**
   * The current editorState. This gets passed down from the editor.
   */
  editorState: _propTypes2.default.object,

  /**
   * A method that can be called to update the editor's editorState. This 
   * gets passed down from the editor.
   */
  updateEditorState: _propTypes2.default.func,

  /**
   * The block type this button is responsible for.
   */
  blockType: _propTypes2.default.string
};
exports.default = BlockButton;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(39)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(38)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  iconContainer: {
    display: 'inline-block',
    height: 24,
    width: 24,
    cursor: 'pointer',
    verticalAlign: 'middle'
  }

  /**
   * Helper class to remove the boiler plate in getButtons. And make the 
   * getButtons function easier to read. 
   *
   * As a convenience this passes down the selected and fill props to the children
   * The selected prop is a boolean that's true if the highlighted text in the 
   * editor relates to the inlineStyleType and the fill is the icon colour. Will
   * match the iconColour or selectedIconColor based on the selected property.
   */
};
var InlineButton = function (_Component) {
  _inherits(InlineButton, _Component);

  function InlineButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InlineButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InlineButton.__proto__ || Object.getPrototypeOf(InlineButton)).call.apply(_ref, [this].concat(args))), _this), _this.isSelected = function (editorState, inlineStyleType) {

      // Check the editor is focused
      var selection = editorState.getSelection();
      var selectedBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
      if (!selectedBlock) return false;

      var currentInlineStyle = editorState.getCurrentInlineStyle();
      return currentInlineStyle.has(inlineStyleType);
    }, _this.render = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          updateEditorState = _this$props.updateEditorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          inlineStyleType = _this$props.inlineStyleType,
          otherProps = _objectWithoutProperties(_this$props, ['editorState', 'updateEditorState', 'iconColor', 'iconSelectedColor', 'inlineStyleType']);

      var selected = _this.isSelected(editorState, inlineStyleType);
      var fill = selected ? iconSelectedColor : iconColor;

      return _react2.default.createElement(
        'div',
        _extends({
          style: styles.iconContainer,
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            updateEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyleType));
          }
        }, otherProps),
        _react2.default.Children.map(_this.props.children, function (c) {
          return _react2.default.cloneElement(c, { fill: fill, selected: selected });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return InlineButton;
}(_react.Component);

InlineButton.propTypes = {

  /**
   * The icon colour. This gets passed down from the Editor.
   */
  iconColor: _propTypes2.default.string,

  /**
   * The icon colour when selected. This gets passed down from the Editor.
   */
  iconSelectedColor: _propTypes2.default.string,

  /**
   * The current editorState. This gets passed down from the editor.
   */
  editorState: _propTypes2.default.object,

  /**
   * A method that can be called to update the editor's editorState. This 
   * gets passed down from the editor.
   */
  updateEditorState: _propTypes2.default.func,

  /**
   * The inline style type this button is responsible for.
   */
  styleType: _propTypes2.default.string
};
InlineButton.defaultProps = {
  selected: false
};
exports.default = InlineButton;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BoldButton = __webpack_require__(18);

var _BoldButton2 = _interopRequireDefault(_BoldButton);

var _ItalicButton = __webpack_require__(19);

var _ItalicButton2 = _interopRequireDefault(_ItalicButton);

var _LinkButton = __webpack_require__(20);

var _LinkButton2 = _interopRequireDefault(_LinkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_react2.default.createElement(_BoldButton2.default, { key: 'bold-button' }), _react2.default.createElement(_ItalicButton2.default, { key: 'italic-button' }), _react2.default.createElement(_LinkButton2.default, { key: 'link-button' })];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeaderOneButton = __webpack_require__(24);

var _HeaderOneButton2 = _interopRequireDefault(_HeaderOneButton);

var _HeaderTwoButton = __webpack_require__(25);

var _HeaderTwoButton2 = _interopRequireDefault(_HeaderTwoButton);

var _UnorderedListItemButton = __webpack_require__(29);

var _UnorderedListItemButton2 = _interopRequireDefault(_UnorderedListItemButton);

var _OrderedListItemButton = __webpack_require__(27);

var _OrderedListItemButton2 = _interopRequireDefault(_OrderedListItemButton);

var _BlockQuoteButton = __webpack_require__(22);

var _BlockQuoteButton2 = _interopRequireDefault(_BlockQuoteButton);

var _CodeBlockButton = __webpack_require__(23);

var _CodeBlockButton2 = _interopRequireDefault(_CodeBlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_react2.default.createElement(_HeaderOneButton2.default, { key: 'header-one-button' }), _react2.default.createElement(_HeaderTwoButton2.default, { key: 'header-two-button' }), _react2.default.createElement(_UnorderedListItemButton2.default, { key: 'unordered-list-button' }), _react2.default.createElement(_OrderedListItemButton2.default, { key: 'ordered-list-button' }), _react2.default.createElement(_BlockQuoteButton2.default, { key: 'block-quote-button' }), _react2.default.createElement(_CodeBlockButton2.default, { key: 'code-block-button' })];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(1);

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertAtomicBlock;

var _immutable = __webpack_require__(14);

var _draftJs = __webpack_require__(1);

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = __webpack_require__(1);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SideControl = __webpack_require__(28);

var _SideControl2 = _interopRequireDefault(_SideControl);

var _PopoverControl = __webpack_require__(21);

var _PopoverControl2 = _interopRequireDefault(_PopoverControl);

var _MediaWrapper = __webpack_require__(17);

var _MediaWrapper2 = _interopRequireDefault(_MediaWrapper);

var _getUnboundedScrollPosition = __webpack_require__(34);

var _getUnboundedScrollPosition2 = _interopRequireDefault(_getUnboundedScrollPosition);

var _Style = __webpack_require__(31);

var _Style2 = _interopRequireDefault(_Style);

var _defaultDecorator = __webpack_require__(11);

var _defaultDecorator2 = _interopRequireDefault(_defaultDecorator);

var _defaultBlockRenderMap = __webpack_require__(30);

var _defaultBlockRenderMap2 = _interopRequireDefault(_defaultBlockRenderMap);

var _insertAtomicBlock = __webpack_require__(12);

var _insertAtomicBlock2 = _interopRequireDefault(_insertAtomicBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSelectedBlockElement = function getSelectedBlockElement(range) {
  var node = range.startContainer;
  do {
    if (node.getAttribute && node.getAttribute('data-block') == 'true') return node;
    node = node.parentNode;
  } while (node != null);
  return null;
  /*const currentContent = this.props.editorState.getCurrentContent()
  const selection = this.props.editorState.getSelection()
  return currentContent.getBlockForKey(selection.getStartKey())*/
};

var getSelectionRange = function getSelectionRange() {
  var selection = window.getSelection();
  if (selection.rangeCount == 0) return null;
  return selection.getRangeAt(0);
};

var isParentOf = function isParentOf(ele, maybeParent) {

  while (ele.parentNode != null && ele.parentNode != document.body) {
    if (ele.parentNode == maybeParent) return true;
    ele = ele.parentNode;
  }
  return false;
};

var isInDev = typeof process == 'undefined' || typeof process.env == 'undefined' || process.env.NODE_ENV != 'production';

var styles = {
  editorContainer: {
    //position: 'relative',
    //paddingLeft: 48,
  },
  popOverControl: {
    //width: 78, // Height and width are needed to compute the position
    height: 24,
    display: 'none',
    position: 'absolute',
    zIndex: 999
  },
  sideControl: {
    height: 38, // Required to figure out positioning
    //width: 48, // Needed to figure out how much to offset the sideControl left
    left: -40,
    display: 'none'
  }
};

var popoverSpacing = 3; // The distance above the selection that popover 
// will display

var RichEditor = function (_React$Component) {
  _inherits(RichEditor, _React$Component);

  function RichEditor(props) {
    var _arguments = arguments;

    _classCallCheck(this, RichEditor);

    var _this = _possibleConstructorReturn(this, (RichEditor.__proto__ || Object.getPrototypeOf(RichEditor)).call(this, props));

    _this.state = {};

    _this._blockRenderer = function (contentBlock) {
      var type = contentBlock.getType();

      if (type === 'atomic') {
        var data = contentBlock.getData().toJS();
        var blockTypes = _this.props.blockTypes;

        var component = blockTypes[data.type];

        return {
          component: component,
          editable: false,
          props: {}
        };
      }
    };

    _this._handleKeyCommand = function (command) {
      var editorState = _this.props.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _this._onChange(newState);
        return true;
      }
      return false;
    };

    _this._onChange = function (editorState) {
      return _this.props.onChange(editorState);
    };

    _this.focus = function () {
      if (_this.props.readOnly) return;

      var editorNode = _reactDom2.default.findDOMNode(_this.editor_);

      // relative bounds, this is the distance before finding a node with position
      // relative.
      //

      //var relativeBounds = {
      //  left: editorBounds.left - offsetParentBounds.left, 
      //  top: editorBounds.top - offsetParentBounds.top,
      //}
      //debugger
      //var parent = editorNode.offsetParent


      /*this.setState({
        //editorBounds,
        editorBounds: Object.assign({}, offsetParentBounds, {top: topOffset}),
      })*/

      var scrollParent = _Style2.default.getScrollParent(editorNode);
      //console.log(`focus called: ${require('util').inspect(getUnboundedScrollPosition(scrollParent))}`)
      _this.editor_.focus((0, _getUnboundedScrollPosition2.default)(scrollParent));
      //this.refs.editor.focus();
    };

    _this.insertBlock = function (blockType) {
      var editorState = _this.props.editorState;

      var newEditorState = (0, _insertAtomicBlock2.default)(editorState, { type: blockType });
      _this._onChange(newEditorState);
    };

    _this.insertBlockComponent = function (blockType, componentProps) {
      if (isInDev && componentProps) {
        console.warn('The second componentProps parameter is not supported anymore\n        if this breaks your workflow, please file an issue at \n        https://github.com/AlastairTaft/draft-js-editor');
      }
      if (isInDev) {
        console.warn('insertBlockComponent is deprecated, use insertBlock instead.');
      }
      return _this.insertBlock(blockType);
    };

    _this.componentDidUpdate = function () {
      return _this.updateSelection();
    };

    _this.onEditorChange = function (editorState) {
      var onChange = _this.props.onChange;

      onChange(editorState);
    };

    _this.onBlur = function () {
      var popoverControlEle = _reactDom2.default.findDOMNode(_this.popoverControl_);
      var sideControlEle = _reactDom2.default.findDOMNode(_this.sideControl_);
      if (popoverControlEle) popoverControlEle.style.display = 'none';
      sideControlEle.style.display = 'none';
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur.apply(_this, _arguments);
    };

    if (props.decorator) throw new Error('Passing in a decorator is deprecated, you must first \n        create an editorState object using your decorator and pass in that\n        editorState object instead. e.g. EditorState.createEmpty(decorator)');

    if (props.editorState instanceof _draftJs.ContentState) throw new Error('You passed in a ContentState object when an EditorState \n        object was expected, use EditorState.createWithContent first.');

    /*if (props.editorState != null && 
      !(props.editorState instanceof EditorState))
     throw new Error('Invalid editorState')*/

    _this.updateSelection = function () {

      var selectionRangeIsCollapsed = null,
          sideControlVisible = false,
          sideControlTop = null,
          sideControlLeft = styles.sideControl.left,
          popoverControlVisible = false,
          popoverControlTop = null,
          popoverControlLeft = null;

      if (_this.props.readOnly) return;

      var selectionRange = getSelectionRange();
      if (!selectionRange) return;

      var editorEle = _reactDom2.default.findDOMNode(_this.editor_);
      if (!isParentOf(selectionRange.commonAncestorContainer, editorEle)) return;

      var popoverControlEle = _reactDom2.default.findDOMNode(_this.popoverControl_);
      var sideControlEle = _reactDom2.default.findDOMNode(_this.sideControl_);

      var rangeBounds = selectionRange.getBoundingClientRect();
      var selectedBlock = getSelectedBlockElement(selectionRange);
      if (selectedBlock) {
        var blockBounds = selectedBlock.getBoundingClientRect();

        sideControlVisible = true;
        //sideControlTop = this.state.selectedBlock.offsetTop

        var editorNode = _reactDom2.default.findDOMNode(_this.editor_);
        if (!editorNode) return;
        var editorBounds = editorNode.getBoundingClientRect();
        // Get offset parent that isn't a table cell

        var offsetParent = getNonTDOffsetParent(editorNode);
        var offsetParentBounds = offsetParent.getBoundingClientRect();

        sideControlTop = blockBounds.top - offsetParentBounds.top + (blockBounds.bottom - blockBounds.top) / 2 - styles.sideControl.height / 2;

        sideControlLeft = blockBounds.left - offsetParentBounds.left + styles.sideControl.left;

        // If the side control is off the screen then put it above the block
        if (blockBounds.left + sideControlLeft < 0) {
          sideControlLeft = 0;
          sideControlTop = blockBounds.top - offsetParentBounds.top - styles.sideControl.height;
        }

        // If it's off the top of the page
        if (sideControlTop < 0) {
          sideControlTop = blockBounds.top - offsetParentBounds.top + (blockBounds.bottom - blockBounds.top);
        }

        //console.log(require('util').inspect(sideControlTop))

        sideControlEle.style.left = sideControlLeft + 'px';
        sideControlEle.style.top = sideControlTop + 'px';
        sideControlEle.style.display = 'block';

        if (!selectionRange.collapsed) {

          // The control needs to be visible so that we can get it's width
          popoverControlEle && (popoverControlEle.style.display = 'block');
          var popoverWidth = popoverControlEle && popoverControlEle.clientWidth;

          // ----

          // ----
          //debugger
          popoverControlVisible = true;
          var rangeWidth = rangeBounds.right - rangeBounds.left,
              rangeHeight = rangeBounds.bottom - rangeBounds.top;
          popoverControlTop = rangeBounds.top - offsetParentBounds.top - /*- (editorBounds.top - offsetParentBounds.top)*/styles.popOverControl.height - popoverSpacing;
          popoverControlLeft = 0 + (rangeBounds.left - offsetParentBounds.left) + rangeWidth / 2 - /*styles.popOverControl.width*/popoverWidth / 2;

          //console.log(popoverControlEle)
          //console.log(popoverControlEle.style)
          if (popoverControlEle) {
            popoverControlEle.style.left = popoverControlLeft + 'px';
            popoverControlEle.style.top = popoverControlTop + 'px';
          }
        } else {
          if (popoverControlEle) popoverControlEle.style.display = 'none';
        }
      } else {
        sideControlEle.style.display = 'none';
        if (popoverControlEle) popoverControlEle.style.display = 'none';
      }
    };

    return _this;
  }

  /**
   * This is needed, so that we can return true. Required to stop the event
   * bubbling up and then triggering handling for keyDown.
   */


  // Removing focus as it interfers with third party onClick events


  // For backwards compatibility


  _createClass(RichEditor, [{
    key: 'render',


    /**
     * While editing TeX, set the Draft editor to read-only. This allows us to
     * have a textarea within the DOM.
     */
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          iconColor = _props.iconColor,
          iconSelectedColor = _props.iconSelectedColor,
          popoverStyle = _props.popoverStyle,
          inlineButtons = _props.inlineButtons,
          blockButtons = _props.blockButtons,
          editorState = _props.editorState,
          placeholder = _props.placeholder,
          showInlineButtons = _props.showInlineButtons,
          SideControl = _props.SideControl,
          otherProps = _objectWithoutProperties(_props, ['iconColor', 'iconSelectedColor', 'popoverStyle', 'inlineButtons', 'blockButtons', 'editorState', 'placeholder', 'showInlineButtons', 'SideControl']);

      if (!editorState) {
        editorState = _draftJs.EditorState.createEmpty(_defaultDecorator2.default);
        this._onChange(editorState);
      }

      if (!SideControl) SideControl = _SideControl2.default;

      /*const selectedBlock = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
       if (selectedBlock){
        var selectedBlockType = selectedBlock.getType()
        var currentInlineStyle = editorState.getCurrentInlineStyle()
      }
      const selection = editorState.getSelection()*/

      var sideControlStyles = Object.assign({}, styles.sideControl);
      /*if (this.props.readOnly != true && this.state.sideControlVisible){
        sideControlStyles.display = 'block'
      }*/

      var popoverStyleLocal = Object.assign({}, styles.popOverControl);
      /*if (this.props.readOnly != true && this.state.popoverControlVisible){
        popoverStyleLocal.display = 'block'
      }*/
      Object.assign(popoverStyleLocal, popoverStyle);

      return _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.editorContainer, this.props.style),
          className: this.props.className,
          onClick: placeholder ? this.focus : undefined
        },
        _react2.default.createElement(SideControl, { style: sideControlStyles,
          iconSelectedColor: iconSelectedColor,
          iconColor: iconColor,
          popoverStyle: popoverStyle
          //ref="sideControl"
          , ref: function ref(el) {
            return _this2.sideControl_ = el;
          },
          buttons: blockButtons,
          editorState: editorState,
          updateEditorState: this.onEditorChange
        }),
        showInlineButtons === false ? null : _react2.default.createElement(_PopoverControl2.default, {
          style: popoverStyleLocal,
          editorState: editorState,
          iconSelectedColor: iconSelectedColor,
          iconColor: iconColor,
          updateEditorState: this.onEditorChange
          //ref="popoverControl"
          , ref: function ref(el) {
            return _this2.popoverControl_ = el;
          },
          buttons: inlineButtons
        }),
        _react2.default.createElement(_draftJs.Editor, _extends({
          blockRendererFn: this._blockRenderer,
          blockRenderMap: _defaultBlockRenderMap2.default,
          spellCheck: true,
          handleKeyCommand: this._handleKeyCommand,
          placeholder: placeholder
        }, otherProps, {
          editorState: editorState,
          onChange: this._onChange
          //ref="editor"
          , ref: function ref(el) {
            return _this2.editor_ = el;
          },
          onBlur: this.onBlur
        }))
      );
    }
  }]);

  return RichEditor;
}(_react2.default.Component);

RichEditor.propTypes = {
  blockTypes: _propTypes2.default.object,
  readOnly: _propTypes2.default.bool,
  /**
   * The root component class name.
   */
  className: _propTypes2.default.string,

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
   * Override the inline buttons, these are displayed in the popover control.
   */
  inlineButtons: _propTypes2.default.array,

  /**
   * Override the block buttons, these are displayed in the "more options" 
   * side control.
   */
  blockButtons: _propTypes2.default.array
};
RichEditor.defaultProps = {
  blockTypes: {},
  iconColor: '#000000',
  iconSelectedColor: '#2000FF',
  //editorState: EditorState.createEmpty(defaultDecorator),
  onChange: function onChange() {}
};


function getNonTDOffsetParent(ele) {
  var parent = ele.offsetParent;
  while (parent.style.position != 'relative' && parent != document.body && (parent.tagName == 'TH' || parent.tagName == 'TD' || parent.tagName == 'TABLE')) {

    parent = parent.offsetParent;
  }
  return parent;
}

exports.default = RichEditor;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertAtomicBlock = exports.defaultDecorator = exports.defaultBlockButtons = exports.defaultInlineButtons = undefined;

var _Editor = __webpack_require__(15);

var _Editor2 = _interopRequireDefault(_Editor);

var _defaultButtons = __webpack_require__(9);

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

var _defaultButtons3 = __webpack_require__(10);

var _defaultButtons4 = _interopRequireDefault(_defaultButtons3);

var _defaultDecorator2 = __webpack_require__(11);

var _defaultDecorator3 = _interopRequireDefault(_defaultDecorator2);

var _insertAtomicBlock2 = __webpack_require__(12);

var _insertAtomicBlock3 = _interopRequireDefault(_insertAtomicBlock2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.defaultInlineButtons = _defaultButtons2.default;
exports.defaultBlockButtons = _defaultButtons4.default;
exports.defaultDecorator = _defaultDecorator3.default;
exports.insertAtomicBlock = _insertAtomicBlock3.default;
exports.default = _Editor2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaWrapper = function (_Component) {
  _inherits(MediaWrapper, _Component);

  function MediaWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaWrapper.__proto__ || Object.getPrototypeOf(MediaWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          block = _this$props.block,
          foo = _this$props.foo;

      var data = _draftJs.Entity.get(block.getEntityAt(0)).getData();
      // Pass data down to the child component

      var child = _react2.default.cloneElement(_this.props.blockProps.child, _extends({}, data));
      return child;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MediaWrapper;
}(_react.Component);

exports.default = MediaWrapper;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineButton = __webpack_require__(5);

var _InlineButton2 = _interopRequireDefault(_InlineButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _InlineButton2.default,
    _extends({}, props, { inlineStyleType: 'BOLD', className: 'DraftJsEditor-BoldButton' }),
    _react2.default.createElement(
      'svg',
      { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z' }),
      _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineButton = __webpack_require__(5);

var _InlineButton2 = _interopRequireDefault(_InlineButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _InlineButton2.default,
    _extends({}, props, { inlineStyleType: 'ITALIC', className: 'DraftJsEditor-ItalicButton' }),
    _react2.default.createElement(
      'svg',
      { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' })
    )
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineButton = __webpack_require__(5);

var _InlineButton2 = _interopRequireDefault(_InlineButton);

var _draftJs = __webpack_require__(1);

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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _defaultButtons = __webpack_require__(9);

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //border: '1px solid rgba(204, 204, 204, 0.5);',
    borderRadius: 5
  }
};

var PopoverControl = function (_Component) {
  _inherits(PopoverControl, _Component);

  function PopoverControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoverControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoverControl.__proto__ || Object.getPrototypeOf(PopoverControl)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          updateEditorState = _this$props.updateEditorState,
          editorState = _this$props.editorState,
          iconColor = _this$props.iconColor,
          iconSelectedColor = _this$props.iconSelectedColor,
          buttons = _this$props.buttons;


      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, styles.container, _this.props.style)
        },
        (buttons || _defaultButtons2.default).map(function (button) {
          return _react2.default.cloneElement(button, {
            // Pass down some useful props to each button
            updateEditorState: updateEditorState,
            editorState: editorState,
            iconColor: iconColor,
            iconSelectedColor: iconSelectedColor
          });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PopoverControl;
}(_react.Component);

PopoverControl.propTypes = {
  /**
   * The popover container style
   */
  style: _propTypes2.default.object,

  toggleInlineStyle: _propTypes2.default.func,
  currentInlineStyle: _propTypes2.default.object,

  /**
   * The icon fill colour
   */
  iconColor: _propTypes2.default.string,

  /**
   * The icon fill colour when selected
   */
  iconSelectedColor: _propTypes2.default.string,

  /**
   * The current editorState
   */
  editorState: _propTypes2.default.object,

  /**
   * Can call this to update the editor state
   */
  updateEditorState: _propTypes2.default.func,

  /**
   * The inline buttons to use, if this is omitted will use the default
   * buttons, bold, italic and link.
   */
  buttons: _propTypes2.default.array
};
PopoverControl.defaultProps = {
  iconColor: '#000000',
  iconSelectedColor: '#2000FF'
};
exports.default = PopoverControl;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

var _BlockButton2 = _interopRequireDefault(_BlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
   return _react2.default.createElement(
      _BlockButton2.default,
      _extends({}, props, { blockType: 'blockquote', className: 'DraftJsEditor-blockquote' }),
      _react2.default.createElement(
         'svg',
         { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
         _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
   );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

var _BlockButton2 = _interopRequireDefault(_BlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BlockButton2.default,
    _extends({}, props, { blockType: 'header-one', className: 'DraftJsEditor-header-one' }),
    _react2.default.createElement(
      'svg',
      { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M5 4v3h5.5v12h3V7H19V4z' }),
      _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
    )
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _defaultButtons = __webpack_require__(10);

var _defaultButtons2 = _interopRequireDefault(_defaultButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var popoverSpacing = 3; // The distance above the selection that popover 
// will display

var styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: -24 - popoverSpacing,
		//width: 24 * 6,
		height: 24 + popoverSpacing,
		zIndex: 998,
		whiteSpace: 'nowrap'
	},
	innerContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		//border: '1px solid rgba(204, 204, 204, 0.5);',
		borderRadius: 5,
		height: 24
	},
	iconContainer: {
		display: 'inline-block',
		height: 24,
		width: 24
	},
	selectedIconContainer: {}
};

var MoreOptions = function (_Component) {
	_inherits(MoreOptions, _Component);

	function MoreOptions() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, MoreOptions);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoreOptions.__proto__ || Object.getPrototypeOf(MoreOptions)).call.apply(_ref, [this].concat(args))), _this), _this.toggleBlockType = function (blockType) {
			if (_this.props.toggleBlockType) _this.props.toggleBlockType(blockType);
		}, _this.render = function () {
			var _this$props = _this.props,
			    iconColor = _this$props.iconColor,
			    iconSelectedColor = _this$props.iconSelectedColor,
			    style = _this$props.style,
			    buttons = _this$props.buttons,
			    updateEditorState = _this$props.updateEditorState,
			    editorState = _this$props.editorState,
			    toggleBlockType = _this$props.toggleBlockType,
			    otherProps = _objectWithoutProperties(_this$props, ['iconColor', 'iconSelectedColor', 'style', 'buttons', 'updateEditorState', 'editorState', 'toggleBlockType']);

			return _react2.default.createElement(
				'div',
				_extends({ style: Object.assign({}, styles.container) }, otherProps),
				_react2.default.createElement(
					'div',
					{ style: Object.assign({}, styles.innerContainer, style) },
					(buttons || _defaultButtons2.default).map(function (button) {
						return _react2.default.cloneElement(button, {
							// Pass down some useful props to each button
							updateEditorState: updateEditorState,
							editorState: editorState,
							iconColor: iconColor,
							iconSelectedColor: iconSelectedColor
						});
					})
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return MoreOptions;
}(_react.Component);

MoreOptions.propTypes = {
	/**
    * Override the inline styles for the container.
    */
	style: _propTypes2.default.object,

	toggleBlockType: _propTypes2.default.func,
	selectedBlockType: _propTypes2.default.string,

	/**
  * The icon fill colour
  */
	iconColor: _propTypes2.default.string,

	/**
  * The icon fill colour when selected
  */
	iconSelectedColor: _propTypes2.default.string,

	/**
  * Override the block buttons.
  */
	buttons: _propTypes2.default.array
};
MoreOptions.defaultProps = {
	iconColor: '#000000',
	iconSelectedColor: '#2000FF'
};
exports.default = MoreOptions;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

var _BlockButton2 = _interopRequireDefault(_BlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
   return _react2.default.createElement(
      _BlockButton2.default,
      _extends({}, props, { blockType: 'ordered-list-item', className: 'DraftJsEditor-ordered-list-item' }),
      _react2.default.createElement(
         'svg',
         { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', { d: 'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z' }),
         _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
   );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MoreOptions = __webpack_require__(26);

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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlockButton = __webpack_require__(2);

var _BlockButton2 = _interopRequireDefault(_BlockButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
   return _react2.default.createElement(
      _BlockButton2.default,
      _extends({}, props, { blockType: 'unordered-list-item', className: 'DraftJsEditor-unordered-list-item' }),
      _react2.default.createElement(
         'svg',
         { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', { d: 'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z' }),
         _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
      )
   );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(14);

var _draftJs = __webpack_require__(1);

var blockRenderMap = (0, _immutable.Map)({
  'atomic': {
    // The only reason for overriding the blockRenderMap is to change the
    // atomic element from a 'figure' to a div.
    element: 'div'
  }
});

var extendedBlockRenderMap = _draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap);

exports.default = extendedBlockRenderMap;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var getStyleProperty = __webpack_require__(33);

/**
 * @param {DOMNode} element [description]
 * @param {string} name Overflow style property name.
 * @return {boolean} True if the supplied ndoe is scrollable.
 */
function _isNodeScrollable(element, name) {
  var overflow = Style.get(element, name);
  return overflow === 'auto' || overflow === 'scroll';
}

/**
 * Utilities for querying and mutating style properties.
 */
var Style = {
  /**
   * Gets the style property for the supplied node. This will return either the
   * computed style, if available, or the declared style.
   *
   * @param {DOMNode} node
   * @param {string} name Style property name.
   * @return {?string} Style property value.
   */
  get: getStyleProperty,

  /**
   * Determines the nearest ancestor of a node that is scrollable.
   *
   * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
   *
   * @param {?DOMNode} node Node from which to start searching.
   * @return {?DOMWindow|DOMElement} Scroll parent of the supplied node.
   */
  getScrollParent: function getScrollParent(node) {
    if (!node) {
      return null;
    }
    var ownerDocument = node.ownerDocument;
    while (node && node !== ownerDocument.body) {
      if (_isNodeScrollable(node, 'overflow') || _isNodeScrollable(node, 'overflowY') || _isNodeScrollable(node, 'overflowX')) {
        return node;
      }
      node = node.parentNode;
    }
    return ownerDocument.defaultView || ownerDocument.parentWindow;
  }

};

module.exports = Style;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var camelize = __webpack_require__(32);
var hyphenate = __webpack_require__(35);

function asString(value) /*?string*/{
  return value == null ? value : String(value);
}

function getStyleProperty( /*DOMNode*/node, /*string*/name) /*?string*/{
  var computedStyle = void 0;

  // W3C Standard
  if (window.getComputedStyle) {
    // In certain cases such as within an iframe in FF3, this returns null.
    computedStyle = window.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
  }
  // Safari
  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = document.defaultView.getComputedStyle(node, null);
    // A Safari bug causes this to return null for `display: none` elements.
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
    if (name === 'display') {
      return 'none';
    }
  }
  // Internet Explorer
  if (node.currentStyle) {
    if (name === 'float') {
      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
    }
    return asString(node.currentStyle[camelize(name)]);
  }
  return asString(node.style && node.style[camelize(name)]);
}

module.exports = getStyleProperty;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */

function getUnboundedScrollPosition(scrollable) {
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    return {
      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(13);
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(13);
var assign = __webpack_require__(36);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(37);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })
/******/ ]);