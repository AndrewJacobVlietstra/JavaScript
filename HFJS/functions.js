function bark(name, weight) {
    if(weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

/*
bark("Angus", 22);
bark("Spike", 18);
bark("Fido", -1);
bark("Bruno", "21");
bark("Dino", 0, 0);
bark("Scottie", -Infinity);
*/

function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    }
    else if (temp < 70) {
        console.log("Wear a sweater");
    }
    else {
        console.log("Wear a t-shirt");
    }
}

// whatShallIWear(50);
// whatShallIWear(60);
// whatShallIWear(80);

function dolt(param){
    param = 2;
    // console.log(param);
}
var test = 1;
dolt(test);
console.log(test);




function dogYears (dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + " years old");
}
var myDog = "Fido";
dogYears("Fido", 4);
dogYears(myDog, 4);



function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests);



function secret() {
    console.log("The secret of life is 42");
}
secret();



function speak(kind) {
    var defaultSound = "No pet was heard";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}

// var pet = prompt("Enter a type of pet: ");
// speak(pet);
