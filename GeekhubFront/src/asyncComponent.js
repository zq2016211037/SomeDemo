/**
 * @file 异步组件定义 用于webpack构建懒加载
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

// 首页组件
export const homeContent = resolve => require(['./views/portal/index.vue'], resolve);

export const userInfo = resolve => require(['./views/portal/userInfo.vue'], resolve);

export const articleDetail = resolve => require(['./views/portal/articleDetail.vue'], resolve);