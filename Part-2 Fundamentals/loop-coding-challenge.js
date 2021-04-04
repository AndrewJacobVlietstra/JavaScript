const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

arrayNums = [1, 2, 3, 4];
let sum = 0;

function calcTip(bill) {
    let tip;
  
    if(bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
        tips.push(tip);
        totals.push(bill + tip);
    } 
    else {
        tip = bill * 0.2;
        tips.push(tip);
        totals.push(bill + tip);
    }
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}

console.log(tips);
console.log(totals);


function calcAverage(array) {
    
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return console.log(sum / array.length);
}

calcAverage(arrayNums);