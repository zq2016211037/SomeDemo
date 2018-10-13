/**
 * @file 关于Angela首页菜单配置
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

export default {
    homeTopNavMenu: [{
        key: 'homePage',
        label: '首页',
        route: '/'
    }, {
        key: 'blog',
        label: '博客',
        route: '',
        childrens: [{
            key: 'webFront',
            label: '前端',
            route: 's'
        }]
    }, {
        key: 'download',
        label: '下载',
        route: '/'
    }, {
        key: 'content',
        label: '内容',
        route: '/'
    }]
};