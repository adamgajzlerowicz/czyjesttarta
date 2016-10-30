const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'public');
const TEMPLATE = path.join(__dirname, 'template/index.html');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8081;


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
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
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
        // hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: HOST,
        port: PORT,
        outputPath: BUILD
    },
    plugins: [
        // new ExtractTextPlugin('bundle.css', { allChunks: true }),
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
        })
    ],
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
};

module.exports = config;