// Depth-first Search
// Implement the depthFirstSearch method on the "Node" class, which takes in an empty array, traverse the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and return it.

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addchild(name) {
        this.children.push(new Node(name));
        return this;
    }
    // O(v + e) Time | O(v) Space ; where "v" stands for the vertices of the tree and "e" for the egdes
    depthFirstSearch(array){
        array.push(this.name);
        for ( let child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }

}