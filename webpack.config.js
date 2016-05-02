const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const PluginHTML = require('html-webpack-plugin');
const PluginClean = require('clean-webpack-plugin');
const PluginExtractText = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['react-hot', 'ts'],
                include: PATHS.app
            }
        ]
    },
    plugins: [
        new PluginHTML({
            template: 'node_modules/html-webpack-template/index.ejs',
            title: 'Kanban app',
            appMountId: 'app',
            inject: false
        })
    ]
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: '#eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'error-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {
        entry: {
            vendor: Object.keys(pkg.dependencies)
        },
        output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: PluginExtractText.extract('style', 'css'),
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new PluginClean([PATHS.build]),
            // Notify React of production build.
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            // Extract vendor and manifest files.
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            }),
            new PluginExtractText('[name].[chunkhash].css')
        ]
    });
}
