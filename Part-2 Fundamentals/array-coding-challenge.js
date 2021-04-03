bills = [125, 555, 44];
total = [];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

function calcTip(bill) {
    let tip;

    if(bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
        total.push(bill + tip);
        return tip;
    } 
    else {
        tip = bill * 0.2;
        total.push(bill + tip);
        return tip;
    }
}

console.log(tips);
console.log(total);