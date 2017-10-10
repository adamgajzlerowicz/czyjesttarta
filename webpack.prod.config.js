const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'docs');
const TEMPLATE = path.join(__dirname, 'template/index.html');


module.exports = {
    entry: {
        app: APP,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: BUILD,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?cacheDirectory'],
                include: APP
            },

            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production') // eslint-disable-line quote-props
            }
        }),

        new CleanPlugin([BUILD],{
            exclude: ['favicon.png', '.gitkeep']
        }),

        // Auto generate index.html
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            // JS placed at the bottom of the body element
            inject: 'body',
            // Use html-minifier
            minify: {
                collapseWhitespace: true
            }
        }),

        new CopyWebpackPlugin([
            { from: 'template/tarta.jpg', to: 'tarta.jpg' },
            { from: 'template/favicon.png', to: 'favicon.png' }
        ]),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
