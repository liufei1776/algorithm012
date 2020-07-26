/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    backtrack(nums, [], result);
    return result;
};

function backtrack(nums, track, result) {
    // 1. 结束条件
    if(track.length == nums.length) {
        result.push([...track])
        return;
    }

    // 2. 处理当前层逻辑
    for(let i=0; i<nums.length; i++) {
        // 排除不合法的选择 -- 即已经选过的
        if(track.includes(nums[i])) {
            continue;
        }

        // 做选择
        track.push(nums[i]);

        // 3. drill down
        backtrack(nums, track, result);

        // 4. reverse states
        track.pop()
    }
}

console.log(permute([1]));


