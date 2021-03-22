// Create the function
function logger() {
    console.log('My name is Andrew');
}

// calling, running or invoking the function
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return console.log(juice);
}

fruitProcessor(2, 3);

const num = Number('22');