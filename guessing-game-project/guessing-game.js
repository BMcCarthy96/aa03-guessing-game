const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber;
let numAttempts = Number(askLimit());

function randomInRange(min, max) {
    min = Number(min);
    max = Number(max);
    let random = Math.floor(Math.random() * (max - min) + min);
    secretNumber = random;
    return secretNumber;
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        answer = Number(answer);
        checkGuess(answer);
        console.log("Guesses remaining: ", (numAttempts -= 1));

        if (numAttempts === 0) {
            console.log("You Lose");
            rl.close();
        }

        if (answer !== secretNumber && numAttempts !== 0) {
            askGuess();
            // console.log(numAttempts--);
        } else if (answer === secretNumber) {
            console.log("You win!");
            rl.close();
        }
    });
}

function askRange(min, max) {
    rl.question("Enter a minimum number: ", (min) => {
        rl.question("Enter a maximum number: ", (max) => {
            console.log(
                `I'm thinking of a number between ${min} and ${max}...`
            );
            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
}

function askLimit() {
    rl.question("Enter a maximum number of attempts: ", (num) => {
        numAttempts = Number(num);
        askRange();
        askGuess();
    });
}

function checkGuess(num) {
    num = Number(num);

    if (num === secretNumber) {
        console.log("Correct!");
        return true;
    } else if (num > secretNumber) {
        console.log("Too high.");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low.");
        return false;
    }
}

// console.log(randomInRange(1, 3));
console.log(askLimit());
// askLimit();
// console.log(askRange());
