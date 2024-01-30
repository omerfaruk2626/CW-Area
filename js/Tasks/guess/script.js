
confirm("I want to play a game! Are you ready?");
let b = +prompt("How many guesses do you want?");
const rand = Math.floor(Math.random() * 51)
// const rand = 20;
let c;

while (b > 0) {
    c = +prompt(`Enter a number (0-50): \nYou have ${b} guesses left`);

    if (c < rand) {
        if (rand - c < 8) {
            console.log(alert("So close! Enter a bigger number."));
        }
        else {
            console.log(alert("Enter a much bigger number."));
        }
    } else if (c > rand) {
        if (c - rand < 8) {
            console.log(alert("So close! Enter a smaller number."));
        }
        else {
            console.log(alert("Enter a much smaller number."));
        }
    } else {
        console.log(alert("👏 Congratulations! You did it!"));
        break;
    }

    b--;
}

if (b === 0) {
    console.log(alert(`😭 Sorry, you've come to the end of the road. The number was ${rand}.`));
}
