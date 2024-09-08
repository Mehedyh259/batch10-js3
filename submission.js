
function giveBiggestNumber(array) {
    if (!Array.isArray(array)) {
        return "this is not an array...!";
    }
    let biggest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
        }
    }
    return biggest;
}

function createEmail(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    const result = info.name + "@" + info.address + ".com";
    return result
}

function calculateSavings(income) {

    if (typeof income !== "number") {
        return "invalid input"
    }

    const houseRent = 5000;
    const mealCost = 3000;
    const personalExpense = 2000;
    const totalExpenses = houseRent + mealCost + personalExpense

    if (totalExpenses > income) {
        return "Earn more..!"
    }

    const savings = income - totalExpenses;

    return savings;

}