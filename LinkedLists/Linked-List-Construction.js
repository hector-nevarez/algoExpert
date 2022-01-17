// Linked List Construction

//Write a DoublyLinkedList class that has a head and a tail, both of whichh point to either a linked list node or None/Null.
// The class should support:
// --> Setting the head and tail of the linked list.
// --> Inserting nodes before and after other nodes as well as at given positions (the position of the head node is 1).
// --> Removing given nodes and removing nodes with given values.
// --> Searching for nodes with given vales.

// Note that the "setHead", "setTail", "insertBefore", "insertAfter", "insertAtPosition", and "remove" methods all take in actual Nodes as input parameters- not integers (exceppt for insertAtPosition, which also takes in an integer representing the position); this means that you don't need to create any new Nodes in the methods. The input nodes can be either stand-alone nodes or nodes that are already in the linked list. You won't be told if the nodes are already in the linked list, so your code will have to defensevly handle this scenario.

// This is an input class. Do not edit.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1) Time | O(1) Space
    setHead(node) {
        // Write your code here.
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        //else{
        //node.prev=null;
        //node.next=this.head;
        //this.head.prev=node;
        //this.head=node;
        //}
        this.insertBefore(this.head, node);
    }

    // O(1) Time | O(1) Space
    setTail(node) {
        // Write your code here.
        if (!this.tail) {
            this.setHead(node);
            return;
        }
        //else{
        //	node.prev= this.tail;
        //	node.next= null;
        //	this.tail.next=node;
        //	this.tail= node;
        //}
        this.insertAfter(this.tail, node);
    }

    // O(1) Time | O(1) Space
    insertBefore(node, nodeToInsert) {
        // Write your code here.
        if (this.head === nodeToInsert && this.tail === nodeToInsert) {
            // Do nothing
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (!node.prev) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    // O(1) Time | O(1) Space
    insertAfter(node, nodeToInsert) {
        // Write your code here.
        if (this.head === nodeToInsert && this.tail === nodeToInsert) {
            // Do nothing
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (!node.next) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    // O(p) Time | O(1) Space ; where "p" is the position that the nonde has to be inserted on
    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let currentNode = this.head;
        for (let repeat = 1; repeat < position; repeat++) {
            currentNode = currentNode.next;
        }
        if (currentNode) {
            this.insertBefore(currentNode, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
        //this.remove(nodeToInsert);
        //nodeToInsert.prev= currentNode;
        //nodeToInsert.next= currentNode.next;
        //currentNode.next= nodeToInsert;
        //currentNode.next.prev= nodeToInsert;
    }

    // O(n) Time | O(1) Space ; where "n" is the amount of elements in the linked list (amount of nodes).
    removeNodesWithValue(value) {
        // Write your code here.
        let currentNode = this.head;
        while (currentNode) {
            const nodeToRemove = currentNode;
            currentNode = currentNode.next;
            if (nodeToRemove.value === value) {
                this.remove(nodeToRemove);
            }
        }
    }

    // O(1) Time | O(1) Space
    remove(node) {
        // Write your code here.
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.next = null;
        node.prev = null;
    }

    // O(n) Time | O(1) Space ; where "n" is the amount of elements in the linked list (amount of nodes).
    containsNodeWithValue(value) {
        // Write your code here.
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}
