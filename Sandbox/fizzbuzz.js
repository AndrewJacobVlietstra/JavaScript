let counter = 0;
let num = 1;
while (counter < 100) {

    if ((num % 3 == 0) && (num % 5 == 0)) {
        console.log("Fizz Buzz");
    }
      else if ((num % 3 == 0) && (num % 5 != 0)) {
        console.log("Fizz");
    } else if ((num % 5 == 0) && (num % 3 != 0)) {
        console.log ("Buzz");
    } else {
        console.log(num);
    }
    num += 1;
    counter += 1;
}