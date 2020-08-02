class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    append(side, child) {
        if(child == null || !(child instanceof BinaryTreeNode)) {
            throw 'Child node is inValid';
        }
        else if(['left', 'right'].indexOf(side) == -1) {
            throw 'Side parameter value is invalid';
        }
        else if(this.left != null && this.right != null) {
            throw 'Parent node has owned two children';
        }
        else if(side == 'left' && this.left != null) {
            throw 'Parent node has owned left child.'
        }
        else if(side == 'right' && this.right != null) {
            throw 'Parent node has owned right child.'
        }

        this[side] = child;

        // 链式操作
        return child;
    }
}


/**  创建一个二叉树
/*         10
/*       /    \
/*      45     9
/*     /  \   / \
/*    17   1 33  5
*/
let root = new BinaryTreeNode(10);
let node45 = new BinaryTreeNode(45);
let node9 = new BinaryTreeNode(9);
root.append('left', node45);
root.append('right', node9);
node45.append('left', new BinaryTreeNode(17));
node45.append('right', new BinaryTreeNode(1));
node9.append('left', new BinaryTreeNode(33));
node9.append('right', new BinaryTreeNode(5));
console.log('Tree', root);






// 深度优先搜索
let visited = [];
function dfs(root, visited) {
    if(root==null) return visited;

    // process current level
    if(!visited.includes(root)) {
        visited.push(root.value);
        // console.log([...visited]);
    }
        

    if(root.left != null) {
        dfs(root.left, visited);
    }

    if(root.right != null) {
        dfs(root.right, visited);
    }
        

}

dfs(root, visited);
console.log(visited);