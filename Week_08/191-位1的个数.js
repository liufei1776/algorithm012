/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    while(x != 0 ) {
        sum++;
        x &= (x-1);
    }

    return sum;
};
// 分析：这是 利用 位运算技巧 



var hammingWeight2 = function(n) {
    let binaryStr = n.toString(2);
    return binaryStr.replace(/0/g, '').length;
};
// 分析：常规思路，利用 api 将 n 转换成 二进制字符串，然后寻找1的个数。