function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

// "new" is a constructor
var toy = new Duck("quack quack"); // constructing new function (new instance of function?) and assigning it to toy variable?
toy.quack(); // call the quack function inside the Duck function
console.log(typeof toy); // toy is an object 
console.log(toy instanceof Duck); // checks to see if prototype property of a constructor appears