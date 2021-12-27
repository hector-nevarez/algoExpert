//                  Find closest Value in BTS
// Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Each BST node has an integer value , a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null

// Sample Input
// tree=   10
//       /    \
//      5      15
//     / \    /  \
//    2   5  13   22
//   /         \
//  1           14

//  target= 14;

// Sample Output

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// function findClosestValueInBst(tree, target) {
//     // Write your code here.
//     // Pseudo code:
//     // use a while loop to go through the 'tree' until we encounter a null value
//     // if ( tree.value == target) --> return tree.value 
//     // else if( tree.value > target ) --> go left, also check if(tree.left)-->return tree.value 
//     // else if( tree.value < target ) --> go right, also check if(tree.right)-->return tree.value

//     console.log('This is current value:', tree.value);
//     if (tree.value === target) {
//         return tree.value;
//     } else if (tree.value > target) {
//         if (!tree.left) {
//             return tree.value;
//         } else {
//             return findClosestValueInBst(tree.left, target);
//         }
//     } else if (tree.value < target) {
//         if (!tree.right) {
//             return tree.value;
//         } else {
//             return findClosestValueInBst(tree.right, target);
//         }
//     }
//     // Works but nit for all the cases, for example the parent node is not the closest in value to the target.
// }

// Solution (from algoexpert :(...couldnt sorted out)

function findClosestValueInBst(tree, target) {
    return findClosestValueHelperFunction(tree, target, tree.value);
}

const findClosestValueHelperFunction = function (tree, target, closest) {
    // console.log('This is the current value:', tree);
    if (tree === null) {
        console.log('This is the closest in null', closest);
        return closest;
    }
    if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
        closest = tree.value;
    }
    if (tree.value > target) {
        return findClosestValueHelperFunction(tree.left, target, closest);
    } else if (tree.value < target) {
        return findClosestValueHelperFunction(tree.right, target, closest);
    } else {
        console.log('This is the closest in null', closest);
        return closest;
    }
}
// ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
// WORST Time complexity is O(n) | Space O(n) - where n is the length of the array
// AVERAGE Time complexity is O(log(n)) | Space O(log(n)) - where n is the length of the array


let tree = [
    { "id": "100", "left": "5", "right": "502", "value": 100 },
    { "id": "502", "left": "204", "right": "55000", "value": 502 },
    { "id": "55000", "left": "1001", "right": null, "value": 55000 },
    { "id": "1001", "left": null, "right": "4500", "value": 1001 },
    { "id": "4500", "left": null, "right": null, "value": 4500 },
    { "id": "204", "left": "203", "right": "205", "value": 204 },
    { "id": "205", "left": null, "right": "207", "value": 205 },
    { "id": "207", "left": "206", "right": "208", "value": 207 },
    { "id": "208", "left": null, "right": null, "value": 208 },
    { "id": "206", "left": null, "right": null, "value": 206 },
    { "id": "203", "left": null, "right": null, "value": 203 },
    { "id": "5", "left": "2", "right": "15", "value": 5 },
    { "id": "15", "left": "5-2", "right": "22", "value": 15 },
    { "id": "22", "left": null, "right": "57", "value": 22 },
    { "id": "57", "left": null, "right": "60", "value": 57 },
    { "id": "60", "left": null, "right": null, "value": 60 },
    { "id": "5-2", "left": null, "right": null, "value": 5 },
    { "id": "2", "left": "1", "right": "3", "value": 2 },
    { "id": "3", "left": null, "right": null, "value": 3 },
    { "id": "1", "left": "-51", "right": "1-2", "value": 1 },
    { "id": "1-2", "left": null, "right": "1-3", "value": 1 },
    { "id": "1-3", "left": null, "right": "1-4", "value": 1 },
    { "id": "1-4", "left": null, "right": "1-5", "value": 1 },
    { "id": "1-5", "left": null, "right": null, "value": 1 },
    { "id": "-51", "left": "-403", "right": null, "value": -51 },
    { "id": "-403", "left": null, "right": null, "value": -403 }
];
const createTree = function (treeArr) {
    let newTree = new BST(treeArr[0].value);
    let oriHead = newTree;
    for (let i = 0; i < treeArr.length; i++) {
        // newTree.value= treeArr[i].value
        newTree.left = new BST(treeArr[i].left);
        newTree.right = new BST(treeArr[i].right);
        // newTree= newTree[i].value;
    }
    return oriHead;
}
tree = createTree(tree);
console.log('This is the actual tree:', tree);
const target = -1;
// findClosestValueInBst(tree, target);
