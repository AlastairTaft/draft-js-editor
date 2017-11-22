var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'Editor.js'),
  //eslint: {
  //  configFile: '.eslintrc'
  //},
  module: {
    loaders: [
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
  resolve: {
    extensions: [ '', '.js' ],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  output: {
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "Editor",
    //filename: "Editor.js",
    //path: "dist"
  },
  externals: {
    immutable: 'Immutable',
    react: 'React',
    'react-dom': 'ReactDOM',
    'draft-js': 'Draft',
  }
}