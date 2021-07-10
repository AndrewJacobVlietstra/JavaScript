function range(start, end, step=1) {
    let result = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }

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