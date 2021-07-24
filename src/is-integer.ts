/**
 * 
 * @param num a number
 * @returns boolean
 * @description > 核心思路，求余1，任何整数除以1，余数必然为0，**当然小数除外。**
 */

const isInteger = function (num: number): boolean {
   return num % 1 === 0;
}