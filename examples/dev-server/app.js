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

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={require('./modules/App.js')}>
      <IndexRoute component={require('./modules/Home.js')} />
      <Route path="basic" component={require('./modules/BasicDemo.js')}/>
      <Route path="custom-inline-button" component={require('./modules/CustomInlineButtonDemo.js')}/>
      <Route path="custom-block-button" component={require('./modules/CustomBlockButtonDemo.js')}/>
      <Route path="custom-block-button-draft-api" component={require('./modules/CustomBlockButtonDraftApiDemo.js')}/>
      <Route path="multiple-editors-test" component={require('./modules/MultipleEditorsDemo.js')}/>
      <Route path="raw-content-test" component={require('./modules/RawContentDemo.js')}/>
    </Route>
  </Router>
), document.getElementById('target'))