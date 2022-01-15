class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (this.value > value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BST(value);
            }
        } else if (this.value <= value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BST(value);
            }
        }
        return this;
    }
    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    contains(value) {
        // Write your code here.
        if (this.value > value) {
            if (this.left) {
                return this.left.contains(value);
            } else {
                return false;
            }
        } else if (this.value < value) {
            if (this.right) {
                return this.right.contains(value);
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    remove(value, parent = null) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (this.value > value) {
            if (this.left) {
                this.left.remove(value, this);
            }
        } else if (this.value < value) {
            if (this.right) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.left = this.left.left;
                    this.right = this.left.right;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    // This is a single-node tree; do nothing.
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue() {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}

// The second and best solution;
class BST {
    constructor(value) {
        this.value = value;
        this.rigth = null;
        this.left = null;
    }
    
    insert(value) {
        let currentNode = this;
        while (true) {
            if (currentNode.value > value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else{
                    currentNode.left= new BST(value);
                }
            } else if (currentNode.value < value){
                if(currentNode.right){
                    currentNode= currentNode.right;
                } else{
                    currentNode.right= new BST(value);
                }
            }
        }
        return this;
    }
}