/**
 * https://leetcode-cn.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */


// 暴力法 
var isPowerOfTwo = function(n) {
    if(n == 0) return false;
    if(n == 1) return true;

    while(n > 1) {
        if(n%2 == 0) {  // or (n & 1) == 0
            n /= 2;  // or n = n >> 1
        }
        else {
            return false;
        }
    }

    return true;
};


// 位运算技巧： 所有bit中有且只有一个是1
var isPowerOfTwo2 = function(n) {
    return  n > 0 && (n & (n-1)) == 0;
}