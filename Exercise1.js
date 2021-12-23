//               Two Number Sum
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up, the function should return them in an array, in any order. If no two numbers sum up to the target sum , the function should return an empty array,

// Note that the target sum has to be obtained by summing two diferent integers in the array; you can't add a singleinteger to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input:
// array= [3, 5, -4, 8, 11, 1, -1, 6]
// target sum = 10;

// Sample Output:
// [-1, 11] // The numbers could have been in reverse order

// ------------------------Code below----------------------------

function twoNumberSum(array, targetSum) {
    // Write your code here.
    // ----------Pseudo code------------ 
    // Since the array is NOT sorted will use nested  for loops to go through the entire array
    // If while looping through the second for loop the sum of both elements match the targetSum the add both elements into an array --> else keep looping
    // return the populated array
    const result = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];
            if (sum === targetSum) {
                result.push(array[i]);
                result.push(array[j]);
            }
        }
    }
    return result;
// ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
// My time complexity is O(n^2) Space not sure but probably O(n)
}

// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;
