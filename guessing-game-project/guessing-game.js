const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        if (checkGuess(answer) === secretNumber) {
            console.log("You win!");
            rl.close();
        } else if (checkGuess(answer) !== secretNumber) {
            askGuess();
        }
    });
}

let secretNumber = 1;

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

askGuess();
