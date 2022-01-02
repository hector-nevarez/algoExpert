// Bubble Sort
// Write a funtion that takes in an array of integers and returns a sorted array. Use the Bubble Sort algorithm to sort the array. 

// Sample input
array = [8, 5, 2, 9, 5, 6, 3];

// Sample output
[2, 3, 5, 5, 6, 8, 9];

function bubbleSort(array) {
    // Write your code here.
    // Pseudo code:
    // create a holder variable
    // loop through the array 
    // 			while inside the loop, loop again to the element ahead of the first loop [firstElement] and compare
    //			the element of ther current array [secondElemtn]
    //			if(the firstElement > secondElement) swap them
    // return the array
    let holder = 0;
    for (let firstIdx = 0; firstIdx < array.length; firstIdx++) {
        for (let secondIdx = firstIdx + 1; secondIdx < array.length; secondIdx++) {
            if (array[firstIdx] > array[secondIdx]) {
                holder = array[firstIdx];
                array[firstIdx] = array[secondIdx];
                array[secondIdx] = holder;
            }
        }
    }
    return array;

}
