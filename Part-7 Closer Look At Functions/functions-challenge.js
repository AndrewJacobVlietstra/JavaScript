const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    // This generates [0, 0, 0, 0], covered in next section immediatley invoked function expressions
    answers: new Array(4).fill(0),
};

