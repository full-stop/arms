
/**
 * 
 * @param num any
 * @returns boolean
 * @description 判断输入结果是否为有效数值。
 */

const isNumber = function (num: any) {
    const float = parseFloat(num);
    if (isNaN(float) || isNaN(num)) {
        return false;
    }
    if (float - float !== 0) {
        return false;
    }
    return true;
}

export default isNumber;