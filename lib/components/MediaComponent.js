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

//import katex from 'katex';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KatexOutput = function (_React$Component) {
  _inherits(KatexOutput, _React$Component);

  function KatexOutput(props) {
    _classCallCheck(this, KatexOutput);

    var _this = _possibleConstructorReturn(this, (KatexOutput.__proto__ || Object.getPrototypeOf(KatexOutput)).call(this, props));

    _this._timer = null;
    return _this;
  }

  _createClass(KatexOutput, [{
    key: '_update',
    value: function _update() {
      if (this._timer) {
        clearTimeout(this._timer);
      }

      this._timer = setTimeout(function () {
        /*katex.render(
          this.props.content,
          this.refs.container,
          {displayMode: true}
        );*/
      }, 0);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._update();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.content !== this.props.content) {
        this._update();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: 'container', onClick: this.props.onClick });
    }
  }]);

  return KatexOutput;
}(_react2.default.Component);

var MediaComponent = function (_React$Component2) {
  _inherits(MediaComponent, _React$Component2);

  function MediaComponent(props) {
    _classCallCheck(this, MediaComponent);

    var _this2 = _possibleConstructorReturn(this, (MediaComponent.__proto__ || Object.getPrototypeOf(MediaComponent)).call(this, props));

    _this2.state = { editMode: false };

    _this2._onClick = function () {
      if (_this2.state.editMode) {
        return;
      }

      _this2.setState({
        editMode: true,
        texValue: _this2._getValue()
      }, function () {
        _this2._startEdit();
      });
    };

    _this2._onValueChange = function (evt) {
      var value = evt.target.value;
      var invalid = false;
      try {
        //katex.__parse(value);
      } catch (e) {
        invalid = true;
      } finally {
        _this2.setState({
          invalidTeX: invalid,
          texValue: value
        });
      }
    };

    _this2._save = function () {
      var entityKey = _this2.props.block.getEntityAt(0);
      _draftJs.Entity.mergeData(entityKey, { content: _this2.state.texValue });
      _this2.setState({
        invalidTeX: false,
        editMode: false,
        texValue: null
      }, _this2._finishEdit);
    };

    _this2._remove = function () {
      _this2.props.blockProps.onRemove(_this2.props.block.getKey());
    };
    _this2._startEdit = function () {
      _this2.props.blockProps.onStartEdit(_this2.props.block.getKey());
    };
    _this2._finishEdit = function () {
      _this2.props.blockProps.onFinishEdit(_this2.props.block.getKey());
    };
    return _this2;
  }

  _createClass(MediaComponent, [{
    key: '_getValue',
    value: function _getValue() {
      return _draftJs.Entity.get(this.props.block.getEntityAt(0)).getData()['preview'];
    }
  }, {
    key: '_getPreview',
    value: function _getPreview() {
      return _draftJs.Entity.get(this.props.block.getEntityAt(0)).getData()['preview'];
    }
  }, {
    key: 'render',
    value: function render() {
      var texContent = null;
      if (this.state.editMode) {
        if (this.state.invalidTeX) {
          texContent = '';
        } else {
          texContent = this.state.texValue;
        }
      } else {
        texContent = this._getValue();
      }

      var className = 'TeXEditor-tex';
      if (this.state.editMode) {
        className += ' TeXEditor-activeTeX';
      }

      var editPanel = null;
      if (this.state.editMode) {
        var buttonClass = 'TeXEditor-saveButton';
        if (this.state.invalidTeX) {
          buttonClass += ' TeXEditor-invalidButton';
        }

        editPanel = _react2.default.createElement(
          'div',
          { className: 'TeXEditor-panel' },
          _react2.default.createElement('textarea', {
            className: 'TeXEditor-texValue',
            onChange: this._onValueChange,
            ref: 'textarea',
            value: this.state.texValue
          }),
          _react2.default.createElement(
            'div',
            { className: 'TeXEditor-buttons' },
            _react2.default.createElement(
              'button',
              {
                className: buttonClass,
                disabled: this.state.invalidTeX,
                onClick: this._save },
              this.state.invalidTeX ? 'Invalid TeX' : 'Done'
            ),
            _react2.default.createElement(
              'button',
              { className: 'TeXEditor-removeButton', onClick: this._remove },
              'Remove'
            )
          )
        );
      }

      debugger;
      return _react2.default.createElement(
        'figure',
        {
          contentEditable: false,
          className: className },
        _react2.default.createElement('img', { src: this._getPreview(), onClick: this._onClick }),
        editPanel
      );
    }
  }]);

  return MediaComponent;
}(_react2.default.Component);

exports.default = MediaComponent;