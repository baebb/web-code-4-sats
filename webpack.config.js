// NPM devDependencies
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const BabelPluginTransformObjectAssign = require('babel-plugin-transform-object-assign');
const BabelPluginTransformClassProperties = require('babel-plugin-transform-class-properties');
const BabelPluginTransformRuntime = require('babel-plugin-transform-runtime');

// Configuration Dependencies
const envConfig = require('./env');

// Constants
const OUTPUT_DIR = path.resolve('build');
const CODE4SATS_PORTAL = envConfig[process.env.NODE_ENV];

// Plugin Configuration
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

const EnvironmentPluginConfig = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CODE4SATS_PORTAL: JSON.stringify(CODE4SATS_PORTAL)
    }
});

// Exported Configuration
module.exports = {
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js?[hash:8]',
        path: OUTPUT_DIR,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: {
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            }
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mp3)$/,
            exclude: /node_modules/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env',
                        'react',
                        'flow'
                    ],
                    plugins: [
                        BabelPluginTransformObjectRestSpread,
                        BabelPluginTransformClassProperties,
                        BabelPluginTransformObjectAssign,
                        BabelPluginTransformRuntime
                    ],
                    cacheDirectory: true
                }
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        EnvironmentPluginConfig
    ],
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.css',
            '.scss'
        ],
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        alias: {
            public: path.resolve(__dirname, 'public'),
            config: path.resolve(__dirname, 'src/config'),
            lib: path.resolve(__dirname, 'src/lib'),
            components: path.resolve(__dirname, 'src/components'),
            modules: path.resolve(__dirname, 'src/modules')
        }
    }
};
