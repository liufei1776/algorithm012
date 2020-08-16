/**
 * 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {


   let paths = [];

   for(let row = 0; row <m; row++) {
       paths[row] = [];

       for(let col = 0; col<n; col++) {

            if(row == 0 || col == 0) {
                paths[row][col] = 1;

                // [0][0] 也为1
                
            }
            else {
                paths[row][col] = paths[row-1][col] + paths[row][col-1];
            }
       }
   }

    console.log(paths);
    return paths[m-1][n-1];
   
};

console.log(uniquePaths(3,3));

// 分析
// 这是个杨辉三角形，每个位置的路径 = 该位置左边的路径 + 该位置上边的路径

