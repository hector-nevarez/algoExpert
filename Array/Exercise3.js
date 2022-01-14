//                           Sorted Squared Array
// Write a funtion that takes in a non-empty array of integers that are sorted in asccending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample Input 
// array= [1,2,3,4,5,6,7,8,9]
// Sample output
// [1,4,9,16,25,36,49,64,81]

function sortedSquaredArray(array) {
    // Write your code here.
    // Pseudo code:
    // create a 'result' variable, which is going to store the square values of the original
    // array
    // Create s for loop through the 'array' & for each elemnt we will multiply the by
    // itself & store that value inside the 'result' variable.

    const result = [];
    let negative = false;
    for (let i = 0; i < array.length; i++) {
        let square = array[i] * array[i];
        if (array[i] < 0) {
            negative = true;
        }
        result.push(square);
    }
    if (negative) {
        result.sort((a, b) => a - b);
    }
    return result;
}
// ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
// My time complexity is O(n*log(n)) Space O(n) - where n is the length of the array

// Another solution (this is from algo expert):
function sortedSquaredArray(array) {
    const sortedSquares = [];
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];
        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[idx] = smallerValue * smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }
    return sortedSquares;
}
// Time complexity is O(n) Space O(n) - where n is the length of the array