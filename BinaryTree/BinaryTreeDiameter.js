// Binary Tree Diameter
// Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through th root of the tree.

// A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edged between the path's first node and its last node. 

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Average case is when the tree is balanced:  
// O(n) Time | O(h) Space -->where "n" is the number of nodes & "h" is the amount of functions in the callstack, hence the height of the tree.
// Worst case:
// O(n) Time | O(n) Space --> Where for the space is the number of nodes, and in this case more than a tree we will be dealing with a linear tree or linked list

function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree){
    if(tree === null){
        return new TreeInfo(0,0);
    }

    const leftTreeInfo= getTreeInfo(tree.left);
    const rightTreeInfo= getTreeInfo(tree.right);

    const longestPathThroughRoot= leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameterSoFar= Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiamater= Math.max(longestPathThroughRoot, maxDiameterSoFar);
    const currentHeight= 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiamater, currentHeight);
}

class TreeInfo{
    constructor(diameter, height){
        this.diameter= diameter;
        this.height= height;
    }
}
