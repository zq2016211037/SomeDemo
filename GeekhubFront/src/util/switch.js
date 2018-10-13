/**
 * @file
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

export default {

    /**
     * 将对象数组的key去除
     * @param  {[type]} infoArr [description]
     * @return {[type]}         [description]
     */
    formatTableData: infoArr => {
        let items = [];
        infoArr.forEach(item => {
            items = items.concat(Object.values(item));
        });
        return items;
    },

    /**
     * 对象拼接字符串
     * @param  {[type]} queryConfig [description]
     * @return {[type]}             [description]
     */
    concatQuery: queryConfig => {
        let str = '';
        for (let o in queryConfig) {
            str += o + '=' + queryConfig[o] + '&';
        }
        str = str.substring(0, str.length - 1);
        return str;
    },

    /**
     * 分割成对象
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    splitQuery: str => {
        let arr = str.split('&');
        let queryObj = {};
        arr.forEach(item => {
            let key = item.split('=')[0];
            let value = item.split('=')[1];
            if (key) {
                queryObj[key] = value;
            }
        });
        return queryObj;
    },

    /**
     * 获取全局id
     * @param  {[type]} randomLength [description]
     * @return {[type]}              [description]
     */
    genNonDuplicateID: randomLength => {
        return Number(Math.random().toString().substr(3, randomLength) + Date.now()).toString(36);
    },

    /**
     * 获取uuid
     * @return {[type]} [description]
     */
    guid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16 | 0;
            let v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    /**
     * 数组对象排序 arr.sort(compareObj('key'))
     * @param  {[type]} prop [description]
     * @return {[type]}      [description]
     */
    compareObj: prop => {
        return (obj1, obj2) => {
            let val1 = obj1[prop];
            let val2 = obj2[prop];
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        };
    },

    /**
     * 将文本中的换行替换成 \n
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    changeStringContainsEnterAndLine: str => {
        let i;
        let result = '';
        let c;
        for (i = 0; i < str.length; i++) {
            c = str.substr(i, 1);
            if (c === '\n') {
                result = result + '\\n';
            } else if (c !== '\r') {
                result = result + c;
            }
        }
        return result;
    },

    /**
     * 将\n替换成br
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    replaceSeperator: str => {
        let i;
        let result = '';
        let c;
        for (i = 0; i < str.length; i++) {
            c = str.substr(i, 1);
            if (c === '\n') {
                result = result + '<br/>';
            } else if (c !== '\r') {
                result = result + c;
            }
        }
        return result;
    }
};
