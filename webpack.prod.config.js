const webpack = require('webpack');

// File ops
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Folder ops
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// PostCSS support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// Constants
const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'public');
const TEMPLATE = path.join(__dirname, 'template/index.html');


module.exports = {
    entry: {
        app: APP,
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: BUILD,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: APP
            },

            // Process JSON data fixtures

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
    // Configure PostCSS plugins
    postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            precss,
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    },
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    // Remove comment if you require sourcemaps for your production code
    // devtool: 'cheap-module-source-map',
    plugins: [
        // Required to inject NODE_ENV within React app.
        // Reduntant package.json script entry does not do that, but required for .babelrc
        // Optimizes React for use in production mode
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production') // eslint-disable-line quote-props
            }
        }),
        // Clean build directory
        new CleanPlugin([BUILD],{
            // exclude: ['favicon.png']
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

        // Extract CSS to a separate file
        new ExtractTextPlugin('[name].[chunkhash].css'),

        // Remove comment to dedupe duplicating dependencies for larger projects
        // new webpack.optimize.DedupePlugin(),

        // Separate vendor and manifest files
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
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
