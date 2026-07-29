function calculateAiCost(tokensUsed) {
    // Write your code here.

    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return 'Invalid'
    }

    let freeToken = 500;
    let totalTokenUsed = 0;
    let totalCost = 0;
    let rate = 5;

    if (tokensUsed <= freeToken) {
        return 0;
    } else {
        totalTokenUsed = Math.floor((tokensUsed - freeToken) / 100);
        totalCost = Math.floor(totalTokenUsed * rate);

    }
    return totalCost;


}

// console.log(calculateAiCost(300));
// console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
// console.log(calculateAiCost(1000));
// console.log(calculateAiCost(-10));
// console.log(calculateAiCost("500"));