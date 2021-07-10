function isEven(N) {
    if(N < 0) return isEven(N + 2); // if negative just change direction and add rather than subtract, eveness can be shown by N - 2 or N + 2
    else if(N === 0) return true; // check if even
    else if(N === 1) return false; // check if odd
    else {
        return isEven(N - 2); // else repeat until the even or odd conditions are met
    }
};

console.log(isEven(-8));