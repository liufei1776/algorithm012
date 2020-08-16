/**
 * 63. 不同路径2
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const obstacle = 1;

    //  起点被堵住，根本无法继续
    if(obstacleGrid[0][0] == obstacle) return 0;


    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    
    // 创建2维数组
    let paths = [];
    for(let row=0; row<rows; row++) {
        paths[row] = new Array(cols);
    }

    paths[0][0] = 1;  // 终点就是出发点

    for(let row=1; row<rows; row++) {
        paths[row][0] = (obstacleGrid[row][0] == obstacle || paths[row-1][0] == 0) ? 0 : 1
    }

    for(let col=1; col<cols; col++) {
        paths[0][col] = (obstacleGrid[0][col] == obstacle || paths[0][col-1] == 0) ? 0 : 1
    }

    for(let row=1; row<rows; row++) {
        for(let col=1; col<cols; col++) {
            paths[row][col] = obstacleGrid[row][col] == obstacle ? 0 : (paths[row-1][col] + paths[row][col-1])
        }
    }

    console.log(paths);
    return paths[rows-1][cols-1];
};

// let obstacleGrid = [
//     [0,1,0],
//     [0,1,0],
//     [0,1,0]
//   ];

let obstacleGrid = [[0,0],[1,0]];

console.log(uniquePathsWithObstacles(obstacleGrid));