// Create a function that returns the shortest path that a police officer has to take in order to arrive to a designated location/event in a map.
// The input value that the function will take in as an argument is a string version of the following map:

// map = [
//     O, _, _,
//     _, X, _, T,
//     _, _, _,
// ];

// Each "_" is the path that the officer "O" can take and every "X" is a closed road/obstacle where the officer cannot pass

// Actual input that the function will take:
map = "O__;_X_T;___"

function officerPath(map) {
    let matrixRow = [];
    let visited = [];
    let visitedRow = [];
    // lets find de officer on the map
    const offLocation = [];
    // lets do the map a matrix
    let mapMatrix = map.split(';').map((row, rowIdx) => {
        matrixRow = [];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            if (row[colIdx] === "O") {
                offLocation.push(rowIdx, colIdx);
            }
            matrixRow.push(row[colIdx]);
        }
        return matrixRow;
    });
    // console.log(map);
    // console.log(offLocation);
    // We will create a copy of the map, but with boolean values & will set every "X" to "true";
    visited = map.split(";").map((column) => {
        visitedRow = [];
        for (let idx = 0; idx < column.length; idx++) {
            if (column[idx] === "X" || column[idx] === "O") {
                visitedRow.push(true);
            } else if (column[idx] === "T") {
                visitedRow.push("T")
            } else {
                visitedRow.push(false);
            }
        }
        return visitedRow;
    });
    console.log(visited);


};


officerPath(map);