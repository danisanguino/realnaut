import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: './src/js/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve('dist'), 
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
  },
};