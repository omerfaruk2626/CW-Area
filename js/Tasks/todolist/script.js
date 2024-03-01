const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const outputArea = document.querySelector(".outputArea");
const doneArea = document.querySelector(".doneArea");
const clearBtn = document.getElementById("clear-button");
const doneBtn = document.getElementById("done-button");

input.focus();
let newArray = [];

addBtn.addEventListener("click", function () {
  event.preventDefault();
  if (input.value.trim() !== "") {
    newArray.push(input.value.trim());
    outputAreaF();
    input.value = "";
  } else {
    alert("Lütfen bir not giriniz");
    input.focus();
    input.value = "";
  }
});

const outputAreaF = () => {
  outputArea.innerHTML = "";
  newArray.forEach((item, index) => {
    const postit = document.createElement('section');
    postit.style.padding = "30px 16px 0 37px";
    postit.className = "postit";
    postit.innerHTML = `<p>${item}</p><img class="tik done-button" src="./images/tik.png" alt="">`;

    outputArea.appendChild(postit);
  });
};

outputArea.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("done-button")) {
    const index = Array.from(target.closest('.postit').parentElement.children).indexOf(target.closest('.postit'));
    moveTaskToDone(index);
  }
});

const moveTaskToDone = (index) => {
  const donePostit = document.createElement('section');
  donePostit.className = "postit";
  donePostit.innerHTML = `<p style="text-decoration: line-through;">${newArray[index]}</p>`;

  doneArea.appendChild(donePostit);
  newArray.splice(index, 1);
  outputAreaF();
  
};

clearBtn.addEventListener("click", function () {
  newArray = [];
  // outputAreaF();
  doneArea.innerHTML = ""; 
});
input.value = "";


