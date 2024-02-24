const sayim = [0, 1, 2, 3, 4, 5];
const sayimm = sayim.slice().sort((a, b) => b - a);

const startButton = document.querySelector('.buton');
const progress = document.querySelector('.progress');
const questions1 = document.getElementById('questions1');
const questions2 = document.getElementById('questions2');
const questions3 = document.getElementById('questions3');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const answer1 = document.getElementById('answer1'); // Assuming you have an element with id 'answer1'

let currentQuestionIndex = 0;
let userClicked = false;

startButton.addEventListener('click', startCountdown);

function startCountdown(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show questions1 section
    questions1.style.display = 'block';

    // Hide the button
    startButton.style.display = 'none';

    // Start countdown
    sayimm.forEach((sayi, index) => {
        setTimeout(() => {
            // Show the next question
            progress.textContent = sayi;

            // Set a timer for 5 seconds
            const timer = setTimeout(() => {
                // If the user didn't click within 5 seconds
                answer1.textContent = "Answer not provided";
                currentQuestionIndex++;
                // Reset the clicked class for all answer buttons
                [a1, a2, a3, a4].forEach(answerButton => {
                    answerButton.classList.remove('clicked');
                });
            }, 5000);

            // Add event listeners for answer buttons
            [a1, a2, a3, a4].forEach(answerButton => {
                answerButton.addEventListener('click', () => {
                    // Set the userClicked flag to true when any answer button is clicked
                    userClicked = true;

                    // Add a class to the clicked answer button for identification
                    answerButton.classList.add('clicked');

                    // Check if the answer is correct (for example, if a1 was clicked)
                    if (answerButton.classList.contains('clicked')) {
                        answer1.textContent = "Correct!";
                    } else {
                        answer1.textContent = "Wrong!";
                    }

                    // Clear the timer as the user has clicked
                    clearTimeout(timer);

                    // Reset the userClicked flag for the next iteration
                    userClicked = false;
                });
            });
        }, index * 1000);
    });
}
