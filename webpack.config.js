module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  devtool: "#source-map",
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      { test: /\.vue$/, exclude: /node_modules/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ }
    ]
  },
};