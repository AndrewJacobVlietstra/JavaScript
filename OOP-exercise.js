class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return "attack with " + this.weapon;
    }
}

//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
    attack() {
        return (
            super.attack() + " I am the Victoria of hearts, now bow down to me!"
        );
    }
}

const victoria = new Queen("Victoria", "army", "hearts");

console.log(victoria);
console.log(victoria.attack()); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '


// create a new instance with the queen having (name, weapon, type). Type includes: 'hearts', 'clubs', 'spades', 'diamonds'
const victoria2 = new Queen("Victoria", "army", [
    "hearts",
    "clubs",
    "spades",
    "diamonds",
]);

console.log(victoria2);


