/**
 * @param {number} n 
 * @param {number} k
 * @return {number[][]} 
 */



var combine = function(n, k) {
    let result = []; 
    find(n, k, 1, [], result);
    console.log(result);
    return result;
};

function find(n, k, start, track, result) {
    // 1. terminator
    // 因为要找 k 个书, 因此组合元素长度位==k
    if(k == track.length) {
        // 必须是新数组，即新引用，否则当 track pop 之后，result最终数据是[]
        console.log('terminator', track);
        result.push([...track]);  
        return;
    }

    // 2. process current level logic
    // 另外一个termintor条件是，当 i > n时，超过边界，不会递归
    for(let i=start; i<=n; i++) {
        track.push(i);

        // 3. drill down and 
        find(n, k, i+1, track, result);

        // backtrack
        track.pop();
    }

    // 4. reverse states
}


combine(1,1);
