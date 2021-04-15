const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    // This generates [0, 0, 0, 0], covered in next section immediatley invoked function expressions
    answers: new Array(4).fill(0),

    registerNewAnswer: function(choice) {
        // choice = 0;
        if (choice > this.options.length - 1 || choice < 0) {
            return console.log(`That's not one of the answers!`);
        }
        else {
            this.answers[choice] += 1;
            this.displayResults();
        }
    },

    displayResults: function() {
        console.log(`Poll Results are ${this.answers.join(', ')}`);
    },
};

poll.registerNewAnswer(0);