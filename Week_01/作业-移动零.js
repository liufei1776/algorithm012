/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


 /*
 * ================ Solution 1 ==================
 * 视频中的方法
 */
function moveZeros(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {

            //console.log('j, i:', j, i);

            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;

            // console.log('changed: ', nums);
        }
    }
}


let nums = [0,1,0,3,12];  
let nums = [0,0,0,0];
let nums = [1,2,3,0,5,6];  
let nums = [1,2,3,4,5,6];
moveZeros(nums);

/*
* 分析： 
*  1. 参考教学视频的方法，时间复杂度为O(n); 通过两个指针 i, j 来不断的交换元素
*  2. 在测试过程中，发现对于 A. 非0开头  B. 不含0的数组   前期都要进行非必要的操作 nums[j] = nums[i]
*/



 /*
 * ================ Solution 2 ==================
 * https://leetcode-cn.com/problems/move-zeroes/solution/javascript-shu-zu-sort-yi-xing-gao-ding-by-suan-hu/
 */
function moveZeros(nums) {
    nums.sort(function(a,b) {
        console.log(a,b);
        if(a == 0) {
            return 1; // 移动b后面
        }
        else {
            return 0; // 保持不变
        }
    })
    console.log(nums);
}

// let nums = [0,1,0,3,12];  
// let nums = [0,0,0,0];
// let nums = [1,2,3,0,5,6];  
// let nums = [1,2,3,4,5,6];
let nums = [0,1,0,3,12,0]; 
 moveZeros(nums);

 /*
 * 分析
 *  1. 时间复杂度为 O(n)?  需要了解sort底层的实现原理
 */


 /*
 * ================ Solution 3 ==================
 * https://leetcode-cn.com/problems/move-zeroes/solution/jsti-jie-by-kael_yp-2/
 */
var moveZeroes = function (nums) {
    for (let i = nums.length ; i --;) {
      if (!nums[i]) {
        nums.splice(i, 1);
        nums.push(0);
      }
    }
}

 let nums = [0,1,0,3,12];
 moveZeros(nums);  

 /*
 * 分析
 *  1. 思路很好理解，但存在移动了数组元素，变成了 O(n^2)
 */




 /*
 * ================ Solution 4 ==================
 */
var moveZeros = function (nums) {
    let totalLength = nums.length;
    nums = nums.filter(item => item);

    let zeroCount = totalLength - nums.length;
    for(let i = 1; i <= zeroCount; i++) {
        nums.push(0);
    }

}

 let nums = [0,1,0,3,12];
 moveZeros(nums);  


/*
 * 分析：
 *  1. 本人想的方法，跟Solution3类似，但是没有考虑题目要求(不可创建新数组)。 可能实际工作中会这样写。
 *  2. 利用 filter API 直接先找出 非0 元素，而且顺序不变。 
 */