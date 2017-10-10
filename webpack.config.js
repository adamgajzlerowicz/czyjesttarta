const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Constants
const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'public');
const TEMPLATE = path.join(__dirname, 'template/index.html');
const HOST = '0.0.0.0';
const PORT = 8080;


const config = {
    entry: {
        app: APP
    },
    output: {
        path: BUILD,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

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

    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        stats: 'errors-only',
        host: HOST,
        port: PORT
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['public'], {
            verbose: true,
            dry: false,
            exclude: ['favicon.png']
        }),
        new CopyWebpackPlugin([
            {from: 'template/tarta.jpg', to: 'tarta.jpg'},
            {from: 'template/favicon.png', to: 'favicon.png'}
        ])
    ],
};

module.exports = config;
