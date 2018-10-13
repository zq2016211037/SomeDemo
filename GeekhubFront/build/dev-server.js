/**
 * @file 中间服务器
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
// 引入依赖模块
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.dev.config.js');

// 创建一个express实例
let app = express();

// 调用webpack并把配置传递过去
let compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件，搭建服务器
let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// 使用 webpack-hot-middleware 中间件，实现热加载
let hotMiddleware = require('webpack-hot-middleware')(compiler);

// 为了修改html文件也能实现热加载，使用webpack插件来监听html源文件改变事件
compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        // 发布事件
        hotMiddleware.publish({
            action: 'reload'
        });
        cb();
    });
});

// 注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);

// 监听 8100 端口，开启服务器
app.listen(8100, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at port 8100');
});
