const firstName = 'Jonas';

function calcAge(birthYear) {
    const age = 2021 - birthYear;
    

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh you're a millenial, ${firstName}`;
            console.log(str);
        }
    }

    printAge()
    return age;
}

calcAge(1991);