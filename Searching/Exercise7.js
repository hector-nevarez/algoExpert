// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1. 

// Sample Input: 
// array = [0,1,21,33,45,45,61,71,72,73]
// target= 33

function binarySearch(array, target) {
    // Write your code here.
    let start = 0;
    let finish = array.length - 1;
    let midPoint = 0;
    let searching = true;

    while (searching) {
        midPoint = Math.floor((start + finish) / 2);
        if (target === array[midPoint]) {
            return midPoint;
        }
        if (start === finish) {
            if (target === array[midPoint]) {
                searching = false;
            }
            else {
                return -1;
            }
        }
        else if (target > array[midPoint]) {
            start = midPoint + 1;
        }
        else if (target < array[midPoint]) {
            finish = midPoint - 1;
        }
    }
}
// ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
// My time complexity is O(log(n)) Space O(1) - where n is the length of the array
