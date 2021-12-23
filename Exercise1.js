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

function twoNumberSum(array, targetSum) {
    // Write your code here.
    // ----------Pseudo code------------ 
    // Considering X+Y=targetSum --> Having targetSum & X known we attempt to find Y by doing Y= targetSum - X
    // Know with that Y value we store that value inside an object. 
    // Once we have all Y values we loop through the array and if we find the Y value we store X & Y inside the result array
    const result = [];
    const yValuesRegistry = {};
    let y = 0;
    let x = 0;
    for (let j = 0; j < array.length; j++) {
        y = targetSum - array[j];
        if (!yValuesRegistry[y] && y !== array[j]) {
            yValuesRegistry[y] = y;
        }
    }
    // console.log('This is the Y values stored:', yValuesRegistry);
    for (let i = 0; i < array.length; i++) {
        x = array[i];
        // console.log('This is X', x);
        // console.log('This is yValuesRegistry of x:', yValuesRegistry[x]);
        if (yValuesRegistry[x] || yValuesRegistry[x] === 0) {
            y = yValuesRegistry[x];
            result.push(x);
        }
    }
    console.log('This is the Result:', result);
    return result;
    // ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
    // My time complexity is O(n) Space not sure but probably O(n)
}

twoNumberSum([0, 5], 5);
// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;

// Extra solution directly from Algoexpert:
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right++;
        }
    }
    return [];
}
// ^^^^^^^^^^ Time Complexity: O(nlog(n)), Space: O(1) ^^^^^^^^^^^^^^^^