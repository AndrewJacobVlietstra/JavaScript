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

// Pass in what you want to be the prototype of the newly created object
const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();