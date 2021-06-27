const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge").merge;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: false,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        contentBase: [
            path.resolve(__dirname, 'build')
        ],
        port: 9000,

    }
});