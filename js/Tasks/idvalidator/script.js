const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const nameInput = document.querySelector("#name")


btn.addEventListener("click", () => {
  event.preventDefault();
  const idNumber = input.value;
  const name = nameInput.value;

  // const status = document.querySelector("#status");
  // const idTable = document.querySelector("#idTable");
  // const nameTable = document.querySelector("#nameTable");

  if (idNumber == "" || name == "") {
    alert("Please fill in all the fields.");
    name.value = "";
    input.value = "";
  }

  const digits = idNumber.split("").map(Number);
  const ten =
    (digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7 -
    ((digits[1] + digits[3] + digits[5] + digits[7]) % 10);

  const eleven = (digits.slice(0, 9).reduce((a, b) => a + b) + ten) % 10;

  if (digits[9] === ten % 10 && digits[10] === eleven) {
    input.value = "";
    alert("Valid ID");

  } else {
    alert("Invalid ID");
  }
  input.value = "";
  name.value = "";
});
