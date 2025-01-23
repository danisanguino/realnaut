import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: './frontend/src/js/scripts.js', 
    output: {
        filename: 'js/bundle.js',
        path: path.resolve('frontend', 'dist'), 
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, 
                type: 'asset/resource', 
                generator: {
                    filename: 'assets/[name].[hash][ext]', 
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            {
                                tag: 'img',
                                attribute: 'src',
                                type: 'src',
                            },
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/src/index.html', 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
    devServer: {
        static: './frontend/dist',
        port: 8080,
        open: true,
    },
};
