const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge").merge;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].bundle.[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],

    devServer: {
        contentBase: [
            path.resolve(__dirname, 'build')
        ],
        port: 9000,

    }
});