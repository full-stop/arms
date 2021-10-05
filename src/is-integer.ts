/**
 * 
 * @param num a number
 * @returns boolean
 * @description > 核心思路，求余1，任何整数求余1，余数必然为0，**当然小数除外。**
 */

const isInteger = function (num: number): boolean {
   if (typeof Number.isInteger === 'function') {
      return Number.isInteger(num);
   }
   return num % 1 === 0;
}

export default isInteger;