var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

// Sort method is destructive, in that it changes the given array, rather than returning a new array
numbersArray.sort(compareNumbers);
console.log(numbersArray);


// Lets sort these cola products by amount sold, in ascending order
var products = [ 
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(colaA, colaB) {
    if(colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareSold);
console.log(products);