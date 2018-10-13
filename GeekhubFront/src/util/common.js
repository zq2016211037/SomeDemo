/**
 * @file
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

/*
* 判断obj是否存在于一个数组中
* params:
*   -- a array
*   -- obj object
* return: int
*/
export function contains(arr, obj) {
    function isObjectValueEqual(a, b) {
        // Of course, we can do it use for in
        // Create arrays of property names
        let aProps = Object.getOwnPropertyNames(a);
        let bProps = Object.getOwnPropertyNames(b);
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length !== bProps.length) {
            return false;
        }
        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
    let i = arr.length;
    while (i--) {
        if (isObjectValueEqual(arr[i], obj)) {
            return i;
        }
    }
    return -1;
}