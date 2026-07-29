//Problem 1

function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here…

    if (typeof teamAGoals != "number" || typeof teamBGoals != "number" ||
        typeof teamAGoals === null || typeof teamBGoals === null ||
        typeof teamAGoals === "string" || typeof teamBGoals === "string" ||
        typeof teamAGoals === "object" || typeof teamBGoals === "object" ||
        Array.isArray(teamAGoals) || Array.isArray(teamBGoals)) {
        return "Invalid"
    }


    if (teamAGoals > teamBGoals) {
        return "Team A Won"
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won"
    } else if (teamAGoals === teamBGoals) {
        return "Draw"
    }
}

//Problem 2
function isElevatorSafe(weights) {
    // Write your code here

    if (!Array.isArray(weights)) {
        return "Invalid"
    }

    let safeLimit = 400;
    let totalWeight = 0;

    for (let value of weights) {
        totalWeight = totalWeight + value;
    }

    if (totalWeight <= safeLimit) {
        return true;
    } else {
        return false;
    }
}