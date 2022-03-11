const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Dynamnic UI Practice',
  //   }),
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
