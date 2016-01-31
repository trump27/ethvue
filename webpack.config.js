module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ]
    // loaders: [
    //     { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    //     { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
    //     { test: /\.css$/, exclude: /static/, loader: 'style!css'}
    // ]
  },
};