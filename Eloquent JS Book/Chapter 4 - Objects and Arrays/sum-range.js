function range(start, end, step=1) {
    let result = [];

    if((typeof start) !== 'number' || (typeof end) !== 'number' || (typeof step) !== 'number') return 'Invalid Input'; // Guard Clause

    // If the step is positive, which it is by default, push each number into the array while i is less than the end number
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }

    // If the step is negative, push each number into the array while i is greater than the end number
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }

    return result;
};


function sum(arr) {
    let total = 0;

    for(const num of arr) {
        total += num;
    }

    return total;
};

console.log(sum(range(1, 10)));