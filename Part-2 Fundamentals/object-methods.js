const andrewObject = {
    firstName: 'Andrew',
    lastName: 'Vlietstra',
    birthYear: 1996,
    profession: 'Front End Dev',
    friends: ['Colton', 'Matt', 'Evan'],
    hasDriversLicense: true,

    // functions within objects are known as methods
    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() { 
        return console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.profession}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);
    }
};

// console.log(andrewObject.calcAge(1996));
// console.log(andrewObject['calcAge'](1996));

// Using this keyword in the calcAge method
console.log(andrewObject.calcAge());

andrewObject.getSummary();