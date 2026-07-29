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



console.log(isElevatorSafe([60, 75, 50]))
console.log(isElevatorSafe([90, 100, 95, 120]))
console.log(isElevatorSafe([400]))
console.log(isElevatorSafe("60,75,50"))