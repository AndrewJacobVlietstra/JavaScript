// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0; //Player 1 = 0, Player 2 = 1
const scores = [0, 0];

// Game will only run while this is true
let playing = true;

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = (activePlayer === 0 ? 1 : 0);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if(dice !== 1) {
            // add dice to current score
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold button functionality
btnHold.addEventListener('click', function() {
    if(playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            // finish game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }

        switchPlayer();
    }
});

// New game button functionality
btnNew.addEventListener('click', function() {
    playing = true;
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;

    document.getElementById('score--0').textContent = scores[0];
    document.getElementById('score--1').textContent = scores[1];

    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');

    diceEl.classList.add('hidden');
});