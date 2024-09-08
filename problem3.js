// আপনার মাসিক খরচ, ঘর ভাড়া ৫০০০, খাবার খরচ ৩০০০, হাত খরচ ২০০০, মাস শেষে আপনার সেভিংস কত হবে, আপনার আয় এর উপরে ভিত্তি করে;


function calculateSavings(income) {

    if(typeof income !== "number"){
        return "invalid input"
    }

    const houseRent = 5000;
    const mealCost = 3000;
    const personalExpense = 2000;
    const totalExpenses = houseRent + mealCost + personalExpense

    if(totalExpenses > income){
        return "Earn more..!"
    }

    const savings = income - totalExpenses;

    return savings;

}

const result = calculateSavings(27000)
console.log(result)