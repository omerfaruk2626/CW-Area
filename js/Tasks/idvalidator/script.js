const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const nameInput = document.querySelector("#name");
const resultTable = document.querySelector(".resultTable");
const row2 = document.querySelector(".row2");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const idNumber = input.value;
  const name = nameInput.value.trim();

  if (name === "" || idNumber === "") {
    alert("Please fill in all the fields.");
  } else if (idNumber.length !== 11) {
    alert("ID must be 11 digits long.");
  } else {
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
      newRow.classList.add("text-success");
      row2.style.display = "block";

    } else {
      newStatusTable.innerText = "Invalid";
      newRow.classList.remove("text-success");
      newRow.classList.add("text-danger");
      row2.style.display = "block";


    }
    
    newRow.append(newTimeTable, newNameTable, newIdTable, newStatusTable);

    resultTable.querySelector("tbody").appendChild(newRow);
  }

  input.value = "";
  nameInput.value = "";
});
