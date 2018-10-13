/**
 * @file vue组件挂载、路由配置、以及全局模块的引入
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
import Vue from 'vue';
import router from './route/index';
import store from './store/store';
import ElementUI from 'element-ui';
// import axios from 'axios';

// element-ui样式引入
import 'element-ui/lib/theme-chalk/index.css';
// import 全局配置样式
import './resources/css/common.css';

let vm = new Vue({
    el: '#geekhub',
    router,
    store
});
Vue.use(ElementUI);
Vue.use({vm});

// 切换 vue-resource
// Vue.prototype.$http = axios;