/**
 * @file webpack 生成环境配置
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

// 引入依赖模块
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 引入基本配置
const baseConfig = require('./webpack.base.config.js');

// 必须修改原配置中网站运行时的访问路径，相当于绝对路径，修改完之后，当前配置文件下的很多相对路径都是相对于这个来设定；
// 注意：webpack-dev-server会实时的编译，输出保存在内存中
baseConfig.output.publicPath = '/';

// 重新配置插件项
baseConfig.plugins = [
    new ExtractTextPlugin('styles.css'),
    // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
    new HtmlWebpackPlugin({
        // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
        filename: 'index.html',
        // 源文件，路径相对于本文件所在的位置
        template: path.resolve(__dirname, '../index.html'),
        // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
        chunks: ['vendors', 'index'],
        // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
        inject: 'body',
        // 生成html文件的标题
        title: '百度网络运营中心_NOC'
        // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
        // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    }),

    // 提取css单文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合
    // new ExtractTextPlugin('[name].[contenthash].css'),

    /* // 提取入口文件里面的公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'js/vendors.js'
    }), */

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin()

    // 允许错误不打断程序
    // new webpack.NoErrorsPlugin(),
];

// vue里的css也要单独提取出来

// 启用source-map，开发环境下推荐使用cheap-module-eval-source-map
baseConfig.devtool = 'cheap-module-eval-source-map';

// 为了实现热加载，需要动态向入口配置中注入 webpack-hot-middleware/client ，路径相对于本文件所在的位置
// const devClient = 'webpack-hot-middleware/client';
// 为了修改html文件也能实现热加载，需要修改上面的devClient变量，引入同级目录下的dev-client.js文件
const devClient = './build/dev-client';
// Object.keys()返回对象的可枚举属性和方法的名称
Object.keys(baseConfig.entry).forEach((name, i) => {
    const extras = [devClient];
    baseConfig.entry[name] = extras.concat(baseConfig.entry[name]);
});

module.exports = baseConfig;
