const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");
const todoArea = document.getElementById("todo-area");
const doneArea = document.getElementById("done-area");
const postit1 = document.getElementById("postit1");
const postit2 = document.getElementById("postit2");
const postit3 = document.getElementById("postit3");
const postit4 = document.getElementById("postit4");
const postit5 = document.getElementById("postit5");
const postit6 = document.getElementById("postit6");
const postit7 = document.getElementById("postit7");
const postit8 = document.getElementById("postit8");
const postit9 = document.getElementById("postit9");
const postit10 = document.getElementById("postit10");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const note4 = document.getElementById("note4");
const note5 = document.getElementById("note5");
const note6 = document.getElementById("note6");
const note7 = document.getElementById("note7");
const note8 = document.getElementById("note8");
const note9 = document.getElementById("note9");
const note10 = document.getElementById("note10");

var postitCounter = 1;

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var currentPostit = document.getElementById("postit" + postitCounter);
  var currentNote = document.getElementById("note" + postitCounter);

  currentNote.innerText = input.value;
  currentPostit.style.display = "block";
  input.value = "";

  postitCounter++;
  if (postitCounter > 6) {
    postitCounter = 1;
  }
});

const doneButton = document.querySelector(".done-button");

doneButton.addEventListener("click", function (event) {
    for (let i = 6; i <= 10; i++) {
        const currentNote = document.getElementById("note" + i);
        const currentPostit = document.getElementById("postit" + i);

        if (currentNote && currentPostit) {
            currentNote.textContent = note1.textContent;
            currentNote.style.textDecoration = "line-through";
            currentPostit.style.display = "block";

            note1.textContent = "";
            const currentPostitNumber = i - 5;
            const currentPostit1 = document.getElementById("postit" + currentPostitNumber);

            if (currentPostit1) {
                currentPostit1.style.display = "none";
            }
        }
    }
});
