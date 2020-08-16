/**
 * 64. 最小路径之和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(i==0 && j==0) continue;
            else if(i==0) grid[i][j] = grid[i][j-1] + grid[i][j];
            else if(j==0) grid[i][j] = grid[i - 1][j] + grid[i][j];
            else grid[i][j] = Math.min(grid[i - 1][j], grid[i][j-1]) + grid[i][j];
        }
    }

    return grid[rows-1][cols-1];
};


let grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];

console.log(minPathSum(grid));