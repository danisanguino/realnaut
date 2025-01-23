import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
    entry: './frontend/src/js/scripts.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve('frontend', 'dist'), 
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
                            tag: 'img', // Procesar imágenes en etiquetas <img>
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
    ],
    devServer: {
        static: './frontend/dist',
        port: 8080,
        open: true,
    },
    
};
