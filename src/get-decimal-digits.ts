/**
 * 
 * @param num a number
 * @returns decimal digits
 * @description > 将数值转换为字符串，然后尝试使用 `.` 逗号进行拆分数组，从而判断小数点右边数组元素的长度。
 */
const getDecimalDigits = function (num: number): number {
    const strNumber = String(num);
    return strNumber.split('.')[1]?.length || 0;
}