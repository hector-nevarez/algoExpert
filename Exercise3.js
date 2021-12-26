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

