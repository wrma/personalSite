/*
* @Author: ThinkPad
* @Date:   2017-10-09 23:14:13
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-31 16:03:46
*/
var path = require('path');
var webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname + '/src',//上下文，在import或require文件相对路径时的根目录
    entry : './js/root.js',
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js",
        // publicPath: __dirname + '/dist/'
    },
    resolve : {
        alias : {
            //import或require文件时的别名
            node_modules    : __dirname + '/node_modules',
            components      : __dirname + '/src/js/components',
            page            : __dirname + '/src/js/page',
            images          : __dirname + '/src/images',
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"), //devServer查找文件的地方
        // compress: true, //一切服务都启用gzip 压缩：
        //port: 8088,
        // hot: true,
        // publicPath: __dirname + '/dist/',
        // inline: true, //实时刷新
    },
    devtool: 'inline-source-map', //可以知道错误具体出现在哪个js文件中
    plugins: [
        new HtmlWebpackPlugin({
            template : './index.html',
            filename : 'index.html',
            // favicon  : './favicon.ico',
            title    : '首页',
            inject   : true,
            hash     : true,
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['env','react']
                }
            },
            {
                 test: /\.css$/,
                 loader: [
                   'style-loader',
                   'css-loader'
                 ]
            }
        ]
    },
};

module.exports = config;