const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const nameInput = document.querySelector("#name");
const nameTable = document.querySelector("#nameTable");
const idTable = document.querySelector("#idTable");
const statusTable = document.querySelector("#statusTable");
const timeTable = document.querySelector("#timeTable");



btn.addEventListener("click", (event) => {
  // console.log(input.value);
  event.preventDefault();
  const idNumber = input.value;
  const name = nameInput.value.trim();
  localStorage.setItem("name", name);
  localStorage.setItem("id", idNumber);
  

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
    if (digits[9] === ten && digits[10] === eleven) {
      statusTable.innerText = "Valid";
      nameTable.innerText = name;
      idTable.innerText = idNumber;
      statusTable.className = "text-success";
      nameTable.className = "text-success";
      idTable.className = "text-success";
      timeTable.className = "text-success";
      timeTable.innerText = timeTable.innerText = new Date().toLocaleString();
    } else {
      nameTable.innerText = name;
      idTable.innerText = idNumber;
      statusTable.innerText = "Invalid";
      statusTable.classList.add("text-danger");
      idTable.classList.add("text-danger");
      nameTable.classList.add("text-danger");
      timeTable.className = "text-danger";
      timeTable.innerText = timeTable.innerText = new Date().toLocaleString();
    }
  }

  input.value = "";
  nameInput.value = "";
});
