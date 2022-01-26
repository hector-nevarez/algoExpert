// Create a function that returns the length/steps of the shortest path that a police officer has to take in order to arrive to a designated location/event in a map.
// The input value that the function will take in as an argument is a string version of the following map:

// map = [
//     O, _, _,
//     _, X, _, T,
//     _, _, _,
// ];

// Each "_" is the path that the officer "O" can take and every "X" is a closed road/obstacle where the officer cannot pass

// Actual input that the function will take:
map = "O__;_X_T;___"

// Output
// 4

function officerPath(map) {
    // let matrixRow = [];
    let visited = [];
    let visitedRow = [];
    // lets find de officer on the map
    const offLocation = [];
    // lets do the map a matrix
    // let mapMatrix = map.split(';').map((row, rowIdx) => {
    //     matrixRow = [];
    //     for (let colIdx = 0; colIdx < row.length; colIdx++) {
    //         if (row[colIdx] === "O") {
    //             offLocation.push(rowIdx, colIdx);
    //         }
    //         matrixRow.push(row[colIdx]);
    //     }
    //     return matrixRow;
    // });
    // console.log(map);
    // console.log(offLocation);
    // We will create a copy of the map, but with boolean values & will set every "X" to "true";
    visited = map.split(";").map((column, rowIdx) => {
        visitedRow = [];
        for (let idx = 0; idx < column.length; idx++) {
            if (column[idx] === "X") {
                visitedRow.push(true);
            } else if (column[idx] === "T") {
                visitedRow.push("T");
            } else if (column[idx] === "O") {
                visitedRow.push(false);
                offLocation.push(rowIdx, idx);
            } else {
                visitedRow.push(false);
            }
        }
        return visitedRow;
    });
    console.log(visited);
    // Will create a queue for all the nodes of the matrix we will have to visit
    const nodesToVisit = [[offLocation[0], offLocation[1]]];
    let nodesCount = 0;
    let currentNode;
    while (true) {//nodesToVisit.length
        if (nodesToVisit.length < 1) {
            break;
        }
        currentNode = nodesToVisit.shift();
        console.log('This is the currentNode:', currentNode);
        let row = currentNode[0];
        let column = currentNode[1];
        if (visited[row][column]) {
            continue;
        }
        if (visited[row][column] === "T") {
            return nodesCount;
        }
        if (row > 0 && visited[row - 1][column] === false) {
            nodesToVisit.push([row - 1, column]);
        }
        if (row < visited.length - 1 && visited[row + 1][column] === false) {
            nodesToVisit.push([row + 1, column]);
        }
        if (column > 0 && visited[row][column - 1] === false) {
            nodesToVisit.push([row, column - 1]);
        }
        if (column < visited[row].length - 1 && visited[row][column + 1] === false) {
            nodesToVisit.push([row, column + 1]);
        }
        visited[row][column] = true;
        nodesCount++;
        console.log('This is the node queue:', nodesToVisit);
        console.log('-------------------------------------------------');
    }
    return nodesCount;
};


console.log(officerPath(map));