// River sizes

// You're given a 2-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

// Note that a river can twist. In other words, it doesn't have to be a straight horizontal line; it can be L-shaped, for example:
// matrix=[
//     [1, 0, 1, 0],
//     [0, 0, 1, 1],
//     [1, 1, 0, 0],
//     [1, 0, 1, 1],
// ];

// Write a function that returnsan array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

// Output:
// [1,3,3,2]
// The river can better seen like this:
// matrix=[
//     [1,  , 1,  ],
//     [ ,  , 1, 1],
//     [1, 1,  ,  ],
//     [1,  , 1, 1],
// ];

function riverSizes(matrix) {
    const sizes = [];
    // Create a copy of the array to keep track of the "nodes" that we visited
    const visited = matrix.map(row => row.map(column => column = false));
    // Treverse the matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            // The visited matrix is going to be modified while we traverse, hence we check if we can skip the "node":
            if (visited[row][column]) {
                continue;
            }
            // Call a helper function to traverse the matrix
            traverseMatrix(row, column, matrix, visited, sizes);
        }
    }
    return sizes;
}
function traverseMatrix(row, column, matrix, visited, sizes) {
    let currentRiverSize = 0;
    // Create a queue for the "nodes" we have to visit
    const nodesToVisit = [[row, column]];

    while (nodesToVisit.length) {
        const currentNode = nodesToVisit.shift();
        row = currentNode[0];
        column = currentNode[1];
        if (visited[row][column]) {
            continue;
        }
        visited[row][column] = true;
        // If the matrix on those coordinates is zero then skip it
        if (!matrix[row][column]) {
            continue;
        }
        currentRiverSize++;
        const unvisitedNeighbors = getNeighbors(row, column, matrix, visited);
        for (let neighbor of unvisitedNeighbors) {
            nodesToVisit.push(neighbor);
        }
    }
    if (currentRiverSize > 0) {
        sizes.push(currentRiverSize);
    }
}
function getNeighbors(row, column, matrix, visited) {
    const unvisitedNeighbors = [];
    if (row > 0 && !visited[row - 1][column]) {
        unvisitedNeighbors.push([row - 1, column]);
    }
    if (row < matrix.length - 1 && !visited[row + 1][column]) {
        unvisitedNeighbors.push([row + 1, column]);
    }
    if (column > 0 && !visited[row][column - 1]) {
        unvisitedNeighbors.push([row, column - 1]);
    }
    if (column < matrix[row].length - 1 && !visited[row][column + 1]) {
        unvisitedNeighbors.push([row, column + 1]);
    }
    return unvisitedNeighbors;
}

// Big O of:
// O(r*c) time | O(r*c) space ; where "r" is the rows & the "c" is the columns