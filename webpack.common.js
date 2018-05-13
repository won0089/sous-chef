const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/client/index.jsx'
    },
    resolve: {
        modules: [
            path.resolve(path.resolve(__dirname, './src/client')),
            './node_modules'
        ],
        extensions: ['.js', '.jsx', '.html'],
        alias: {
            components: path.resolve(__dirname, './src/client/components'),
            containers: path.resolve(__dirname, './src/client/containers'),
            reducers: path.resolve(__dirname, './src/client/reducers'),
            stores: path.resolve(__dirname, './src/client/stores'),
            actions: path.resolve(__dirname, './src/client/actions')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                },
                exclude: ['node_modules']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            files: {
                js: ['bundle.js']
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'manifest.json'), to: path.resolve(__dirname, 'dist')
            }
        ])
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
