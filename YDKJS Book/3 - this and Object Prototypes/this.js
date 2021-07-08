function sayThis() {
    console.log(this);
};

sayThis(); // calling the function

obj = {
    name: 'Andrew',
    lastName: 'Vlietstra',
    sayHello: function(){
        console.log(this);
    }
};

obj.sayHello()