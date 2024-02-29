const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const doneArea = document.getElementById("done-area");
const outputArea = document.querySelector(".outputArea");

outputArea.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("done-button")) {
    const index = Array.from(target.closest('.postit').parentElement.children).indexOf(target.closest('.postit'));
    doneButton(index);
  }
});

const outputAreaF = () => {
  outputArea.innerHTML = ""; // Clear the output area
  newArray.forEach((item, index) => {
    const postitCounter = index + 1;

    // Create elements
    const postit = document.createElement('section');
    postit.className = "postit";
    postit.innerHTML = `<p>${item}</p><img class="tik done-button" src="./images/tik.png" alt="">`;

    // Append elements to output area
    outputArea.appendChild(postit);
  });
};

function doneButton(index) {
  const postitCounter = doneArea.children.length + 1;

  // Create elements
  const donePostit = document.createElement('section');
  donePostit.className = "postit";
  donePostit.innerHTML = `<p>${newArray[index]}</p>`;

  // Append elements to done area
  doneArea.appendChild(donePostit);
}

addBtn.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    newArray.push(input.value.trim());
    outputAreaF();
  } else {
    alert("Lütfen bir not giriniz");
    input.focus();
    input.value = "";
  }
});
