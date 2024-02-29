const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-button");
const done = document.getElementById("done-button");
const todoArea = document.getElementById("todo-area");
const doneArea = document.getElementById("done-area");
const postit1 = document.getElementById("postit1");
const postit2 = document.getElementById("postit2");
const postit3 = document.getElementById("postit3");
const postit4 = document.getElementById("postit4");
const postit5 = document.getElementById("postit5");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const note4 = document.getElementById("note4");
const note5 = document.getElementById("note5");

var postitCounter = 1;

addBtn.addEventListener("click", function(event) {
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




doneButton.addEventListener("click", function(event) {
    event.preventDefault();

    var currentPostit = document.getElementById("postit" + postitCounter);
    var currentNote = document.getElementById("note" + postitCounter);
    
});




        






// function addTodo() {
//     if (input.value !== "") {
//         postit1.firstChild.innerText = input.value;
//     }
//     console.log(todos);
// }

// console.log(todos);

// postit1.style.display = "block";