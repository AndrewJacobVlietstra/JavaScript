console.log('OBJECT.CREATE LECTURE');

const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

// Create Steven Object, pass in what you want to be the prototype of the newly created object
const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);

steven.calcAge();

// Checking to see if Steven's prototype is linked to PersonProto
console.log(steven.__proto__ === PersonProto);

// Create Sarah Object
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);

sarah.calcAge();