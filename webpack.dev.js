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
        clean: true,
        assetModuleFilename: 'images/[name][ext]'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {    loader: 'css-loader'},
                    {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },

    devServer:
    {
        contentBase: [
            path.resolve(__dirname, 'build')
        ],
        port: 9000,

    }
});