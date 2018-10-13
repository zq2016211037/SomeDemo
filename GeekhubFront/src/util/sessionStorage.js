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
    getItem: key => {
        let value;
        try {
            value = sessionStorage.getItem(key);
        } catch (err) {
            console.log(err.message);
        }
        return value;
    },
    setItem: (key, value) => {
        try {
            sessionStorage.setItem(key, value);
        } catch (err) {
            console.log(err.message);
        }
    }
};
