var path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src/app.jsx"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2']
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './'
  }
}