var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/Editor.js',
  //eslint: {
  //  configFile: '.eslintrc'
  //},
  output: {
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "Editor",
    filename: "Editor.js",
    filename: process.env.NODE_ENV == 'production' ? 
      'Editor.min.js' : 'Editor.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src')
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

      },
      //{
      //  test: /\.js$/,
      //  loader: 'eslint'
      //}
    ]
  },
  plugins: process.env.NODE_ENV == 'production' ? [
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    modules: [
      path.join(__dirname, "node_modules")
    ],
    symlinks: false,
  },
  externals: {
    immutable: 'Immutable',
    react: 'React',
    'react-dom': 'ReactDOM',
    'draft-js': 'Draft',
  }
}