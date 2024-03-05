const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const nameInput = document.querySelector("#name");
const resultTable = document.querySelector(".resultTable");
const resultArea = document.querySelector(".resultArea");
const row2 = document.querySelector(".row2");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const idNumber = input.value;
  const name = nameInput.value.trim();

  if (name === "" || idNumber === "") {
    alert("Please fill in all the fields.");
  } else if (idNumber <= 0) {
    alert("ID must be a positive number.");
    input.value = "";
  } else if (idNumber.length !== 11) {
    alert("ID must be 11 digits long.");
  }  else {
    const digits = idNumber.split("").map(Number);
    const ten =
      ((digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7 -
        (digits[1] + digits[3] + digits[5] + digits[7])) %
      10;
    const eleven = (digits.slice(0, 9).reduce((a, b) => a + b) + ten) % 10;

    const newRow = document.createElement("tr");
    const newTimeTable = document.createElement("td");
    const newNameTable = document.createElement("td");
    const newIdTable = document.createElement("td");
    const newStatusTable = document.createElement("td");

    newTimeTable.innerText = new Date().toLocaleString();
    newNameTable.innerText = name;
    newIdTable.innerText = idNumber;

    if (digits[9] === ten && digits[10] === eleven) {
      newStatusTable.innerText = "Valid";
      newStatusTable.classList.add("text-success");
      newNameTable.classList.add("text-success");
      newIdTable.classList.add("text-success");
      newTimeTable.classList.add("text-success");
      row2.style.display = "block";
      input.value = "";
      nameInput.value = "";
    } else {
      newStatusTable.innerText = "Invalid";
      newStatusTable.classList.remove("text-success");
      newNameTable.classList.remove("text-success");
      newIdTable.classList.remove("text-success");
      newTimeTable.classList.remove("text-success");
      newStatusTable.classList.add("text-danger");
      newNameTable.classList.add("text-danger");
      newIdTable.classList.add("text-danger");
      newTimeTable.classList.add("text-danger");
      row2.style.display = "block";
      input.value = "";
      nameInput.value = "";
    }

    newRow.append(newTimeTable, newNameTable, newIdTable, newStatusTable);
    resultArea.insertBefore(newRow, resultArea.firstChild);
  }
});
