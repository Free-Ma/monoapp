import { resolve } from 'path';

import deepmerge from 'deepmerge';

/**
 * 深度合并对象
 * @param x 初始值
 * @param y 新值
 * @param arrayMode 对于数组采取的策略,`replace`为直接替换,`merge`为合并数组
 */
export const deepMerge = <T1, T2>(
    x: Partial<T1>,
    y: Partial<T2>,
    arrayMode: 'replace' | 'merge' = 'merge',
) => {
    const options: deepmerge.Options = {};
    if (arrayMode === 'replace') {
        options.arrayMerge = (_d, s, _o) => s;
    } else if (arrayMode === 'merge') {
        options.arrayMerge = (_d, s, _o) => Array.from(new Set([..._d, ...s]));
    }
    return deepmerge(x, y, options) as T2 extends T1 ? T1 : T1 & T2;
};

export const echoTest = () => 'changed';

/**
 * 获取dir参数相对于当前调用这个函数的文件的绝对路径
 * 比如调用者是scripts/test.ts,而src与scripts同级别.那么,pathResolve('../src')就是src的绝对路径
 * @param dir
 */
export const pathResolve = (dir: string) => {
    const { stack } = new Error();
    const stackLines = stack.split('\n');
    const callerLine = stackLines[2].trim();
    const callerFilePath = callerLine.match(/\(([^:)]+):/)[1];
    return resolve(callerFilePath, dir);
};
