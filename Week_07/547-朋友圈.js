// https://leetcode-cn.com/problems/friend-circles/

/**
 * @param {number[][]} M
 * @return {number}
 */


class UF {
    constructor(n) {
        // 连通分量
        this.count = n; 

        this.parent = new Array(n);
        // 父节点指针初始值指向自己
        for(let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    // 合并 p，q
    union(p, q) {
        let rootP = this.find(p); // 找到 p 的顶级父节点
        let rootQ = this.find(q);

        console.log('rootP, rootQ', p, q);

        // 发现 顶级父节点是 一样的，不做处理
        if(rootP == rootQ) return;

        // 否则, 两课树合并为一颗
        this.parent[rootP] = rootQ;
        // this.parent[rootQ] = rootP; 

        console.log(this.parent);

        this.count--;  // 分量减少
    }

    find(p) {
        // 根节点的 parent[x] == x
        while (this.parent[p] != p) {
            p = this.parent[p];
        }

        return p;
    }
 
}





function findCircleNum(M) {
    let n = M.length;
    let uf = new UF(n);

    for(let i=0; i<n; i++) {
        // 因为对称矩阵
        for(let j=0; j<n; j++) {
            if(M[i][j] == 1) {  // 两人互相认识
                uf.union(i,j); // 不断的合并顶级父元素
            }
        } 
    }
    console.log(uf.parent);
    return uf.count;
}

// Test

// let M = [
//     [1,1,0],
//     [1,1,0],
//     [0,0,1]
// ];

let M = [[1,1,0],
[1,1,1],
[0,1,1]];

console.log(findCircleNum(M));

