//              Tournament Winner
// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible, Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.
// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.
// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams. 

// Sample Input
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
];
results = [0, 0, 1];

function tournamentWinner(competitions, results) {
    // Write your code here.
    let winner = '';
    // Pseudo Code:
    // Create a for loop that goes from zero to the length of competitions
    // 		if(results[idx] === 1) --> store the following value, competitions[idx][0]
    //							   |--> otherwise store this, competitions[idx][1]
    // Create for...in and hold the team with highest score
    // Return the winner
    let teams = {}
    let maxScore = 0;
    for (let idx = 0; idx < results.length; idx++) {
        let match = competitions[idx];
        if (results[idx] == 1) {
            if (teams[match[0]]) {
                teams[match[0]]++;
            } else {
                teams[match[0]] = 1;
            }
        } else {
            if (teams[match[1]]) {
                teams[match[1]]++;
            } else {
                teams[match[1]] = 1;
            }
        }
    }
    for (const team in teams) {
        if (maxScore < teams[team]) {
            winner = team;
            maxScore = teams[team];
        }
    }
    return winner;
}
// ^^^^^^^^^^^^^^^^^^^YAY IT WORKS^^^^^^^^^^^^^^^^
// My time complexity is O(n) Space O(k) - where n is the length of the array & k is the number of teams;

