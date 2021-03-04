function bake(degrees) {
    var message;

    if(degrees > 500) {
        message = "I'm not a nuclear reactor!"
    }
    else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    }
    else {
        message = "That's a comfortable temperature for me.";
    }

    return message; //function will return undefined if you dont return something
}

// console.log(bake(undefined));
// console.log(bake(null)); // this one is weird cause null is an object with no type or value
console.log(bake(350));
console.log(bake("Hello"));




function calculateArea(r) {
    var area;
    if(r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log(theArea);
