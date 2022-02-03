// Add a new method to the Date prototype object that returns last year from a given year
Date.prototype.lastYear = function() {
    let dateYear = this.getFullYear();
    return dateYear - 1;
}

console.log(new Date('1900-10-10').lastYear());


// Rewrite map function to return all values of array with map concatenated
Array.prototype.map = function() {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(this[i] + '🗺');
    }
    return newArr;
}

console.log([1, 2, 3].map());