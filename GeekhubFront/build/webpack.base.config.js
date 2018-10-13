/**
 * @file webpack 基础配置
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('当前打包编译环境:::', process.env.NODE_ENV + '\n');

module.exports = {
    // 入口文件，路径相对于本文件所在的位置，可以写成字符串、数组、对象
    entry: {
        // path.resolve([from ...], to) 将to参数解析为绝对路径
        index: './src/index.js',
        // 需要被提取为公共模块的群组
        vendors: ['vue', 'vue-router']
    },
    output: {
        // 输出文件，路径相对于本文件所在的位置
        path: path.resolve(__dirname, '../dist/'),
        // 项目资源文件目录指向
        // publicPath: '/output/',
        // 打包输出文件名
        filename: 'js/[name]_[hash:8].js',
        // 非主入口的文件名，即未被列在entry中，却又需要被打包出来的文件命名配置
        chunkFilename: 'js/[chunkhash:8]_chunk.js'
    },
    // 项目引用
    resolve: {
        // require时省略的扩展名
        extensions: ['.js', '.vue'],
        // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
        alias: {
            'vue': 'vue/dist/vue.js',
            'api': process.env.NODE_ENV === 'development'
                ? path.resolve(__dirname, '../src/config/api-dev.js')
                : process.env.NODE_ENV === 'production-test'
                    ? path.resolve(__dirname, '../src/config/api-prod-test')
                    : path.resolve(__dirname, '../src/config/api-prod-online'),
            'images': path.resolve(__dirname, '../src/resources/images')
        }
    },
    // 不进行打包的模块
    externals: {},
    // 模块加载器 项目依赖loader配置
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [path.join(__dirname, '..', 'src')],
            options: {
                // 生成报告格式
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'style-loader!css-loader!less-loader',
                            fallback: 'vue-style-loader'
                        }),
                        scss: 'style-loader!css-loader!sass-loader',
                        sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            // 使用css-loader和style-loader 加载 .css 结尾的文件
            test: /\.css$/,
            // 将样式抽取出来为独立的文件
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.(sass|scss)$/,
            // 将样式抽取出来为独立的文件
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!sass-loader'
            }),
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                // 把较小的图片转换成base64的字符串内嵌在生成的js文件里
                limit: 10000,
                name: 'images/[name].[ext]?[hash:8]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[ext]?[hash:8]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[ext]?[hash:8]'
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
        new HtmlWebpackPlugin({
            // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
            filename: 'index.html',
            // 源文件，路径相对于本文件所在的位置
            template: path.resolve(__dirname, '../index.html'),
            favicon: path.resolve(__dirname, '../favicon.ico'),
            // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
            chunks: ['vendors', 'index'],
            // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
            inject: 'body',
            // 生成html文件的标题
            title: '百度智能网络平台(NOC)',
            // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
            hash: true
            // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
        })
    ]
};
