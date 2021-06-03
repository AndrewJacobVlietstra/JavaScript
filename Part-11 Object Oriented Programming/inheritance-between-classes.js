console.log('INHERITANCE BETWEEN CLASSES LECTURES');

// Student class will inherit all the properties and methods from the Person class by extending the class
class StudentCl extends PersonCl{
    constructor (firstName, birthYear, course) {
        // Always needs to happen first! Grants access to "this" keyword
        super(firstName, birthYear); // pass in the parameters from the parent class

        // New properties for the child Student class
        this.course = course;
    };

    introduce() {
        console.log(`My name is ${this.firstName} and I'm studying ${this.course}.`);
    }

    calcAge() {
        console.log(`I am ${2021 - this.birthYear} years old, but sometimes as a student I feel older.`);
    }
};

const andy = new StudentCl('Andy', 1999, 'Computer Science');
console.log(andy);

andy.introduce();

andy.calcAge();