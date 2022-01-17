// Breadth-first Search
// Implement the breadthFirstSearch method on the Node class, which takes in anempty array, traverses the tree using the Breadth-first approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

class Node{
    constructor(name){
        this.name= name;
        this.children=[];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

    // O(v + e) time | O(v) space
    breathFirstSearch(array){
        const queue= [this];
        while(queue.length > 0){
            const current= queue.shift();
            array.push(current.name);
            for(const child of current.children){
                queue.push(child);
            }
        }
        return array;
    }
}
