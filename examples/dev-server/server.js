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

import express from 'express';
import path from 'path'
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const APP_PORT = 3000;

// Serve the TeX Editor app
var compiler = webpack({
  entry: path.resolve(__dirname, 'app.js'),
  //eslint: {
  //  configFile: '.eslintrc'
  //},
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'app.js'),
          // Should use lib instead of src, src is handy for playing around with
          // the repo while developing
          path.resolve(__dirname, '..', '..', 'src'),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-class-properties', 'add-module-exports'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      //{
      //  test: /\.js$/,
      //  loader: 'eslint'
      //}
    ]
  },
  output: {filename: 'app.js', path: '/'},
  devtool: 'source-map'
});
var app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true}
});
// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use('/node_modules', express.static('node_modules'));
app.listen(APP_PORT, () => {
  console.log(`Draft Editor is now running on http://localhost:${APP_PORT}`);
});
