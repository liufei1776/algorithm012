/*
* ========== Solution 1 =============
* 官方：暴力破解
*/

let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length -  1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] == target - nums[i]) {
                // 题目假设只有一个答案
                return [i,j];
            }
        }
    }

    return [];
};

/*
* 分析： 
*  1. 思路的重点是  a + b = target -->  a = target - b
*  2. 两个loop, 因此时间复杂度是 O(n^2)
*/


/*
* ========== Solution 2 =============
* https://leetcode-cn.com/problems/two-sum/solution/jie-suan-fa-1-liang-shu-zhi-he-by-guanpengchn/
*/

let twoSum = function(nums, target) {
    // ES6
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        let another = target - nums[i];
        console.log(another);

        if(map.has(another)) {
            // 题目假设只有一个答案
            return [map.get(another), i];  // 其实下标顺序无所谓
        }
        
        // 否则，存入。注意，什么作为key.
        map.set(nums[i], i);
    } 

}

/**
 * 分析：
 *  1. 用空间换时间，利用哈希表降低时间复杂度 -> O(n)
 */