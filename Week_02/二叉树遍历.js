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
/*     1
/*   /   \
/*  2     3
/*       /
/*      4
*/
let root = new BinaryTreeNode(1);
console.log('root', root);

root.append('left', new BinaryTreeNode(2));
root.append('right', new BinaryTreeNode(3)).append('left', new BinaryTreeNode(4));



/**
 * ============ Solution 1 ===============
 */

// 前序遍历 root - left - right
function preorder(root, output) {

    if(root != null) {
        output.push(root.value);
        
        if(root.left != null) {
            preorder(root.left, output);
        }

        if(root.right != null) {
            preorder(root.right, output);
        }
    }

}

// 中序遍历 left - root - right
function inorder(root, output) {

    if(root != null) {

        if(root.left != null) {
            inorder(root.left, output);
        }

        output.push(root.value);

        if(root.right != null) {
            inorder(root.right, output);
        }
    }

}

// 后序遍历 left - right - root
function postorder(root, output) {

    if(root != null) {
        
        if(root.left != null) {
            postorder(root.left, output);
        }

        if(root.right != null) {
            postorder(root.right, output);
        }

        output.push(root.value);
    }

}


let output = []
preorder(root, output);
console.log('preorder', output);

output = []
inorder(root, output);
console.log('inorder', output);

output = []
postorder(root, output);
console.log('postorder', output);


/**
 * 分析
 *  1. 递归
 *  2. 时间复杂度 N
 */



