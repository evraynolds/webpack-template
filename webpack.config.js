const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    devtool: 'inline-source-map', //DON'T use for production // used to find where errors occur
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           title: 'Hot Mod Replacement',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        }
                    }
                ]
            }
            // {
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //        'csv-loader',
            //     ],
            // },
            // {
            //     test: /\.xml$/,
            //     use: [
            //        'xml-loader',
            //     ],
            // },
        ],
    }
};