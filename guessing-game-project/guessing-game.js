const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        if (checkGuess(answer) === randomInRange) {
            console.log("You win!");
            rl.close();
        } else if (checkGuess(answer) !== randomInRange) {
            askGuess();
        }
    });
}

function randomInRange(min, max) {
    min = Number(min);
    max = Number(max);
    let random = Math.floor(Math.random() * (max - min) + min);
    secretNumber = random;
    return secretNumber;
}

function askRange(min, max) {
    rl.question("Enter a minimum number: ", (min) => {
        rl.question("Enter a maximum number: ", (max) => {
            console.log(
                `I'm thinking of a number between ${min} and ${max}...`
            );
            min = Number(min);
            max = Number(max);
            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
}

function checkGuess(num) {
    if (num !== Number) {
        return Number(num);
    }

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
askRange();
// console.log(askRange());
