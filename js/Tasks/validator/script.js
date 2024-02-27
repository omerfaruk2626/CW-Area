const input = document.getElementById("input");
const validateBtn = document.getElementById("validateBtn");
const inputResult = document.getElementById("inputResult");
const loader = document.querySelector(".loader");

input.focus();

validateBtn.addEventListener("click", function () {
  loader.style.visibility = "visible";
  validateBtn.textContent = "Validating...";
  setTimeout(() => {
    loader.style.visibility = "hidden";

let xxx = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/
    if (xxx.test(input.value)) {
      inputResult.textContent = "Valid SSN";
      inputResult.style.color = "green";
    } else {
      inputResult.textContent = "Invalid SSN";
      inputResult.style.color = "red";
    }
    validateBtn.textContent = "Validate";
    input.value = "";
    
  }, 2000);
  setTimeout(() => {
    inputResult.textContent = "";
    input.focus();
    loader.style.visibility = "hidden";
  }, 5000);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" || e.key === "Backspace") {
    document.querySelector("#input").click();
  } else if (e.key === "Enter") {
    validateBtn.click();
  }
});

// function formatSSN(input) {
//   var sanitized = input.value.replace(/[^0-9]/g, "");

//   if (sanitized.length > 5) {
//     sanitized =
//       sanitized.substring(0, 3) +
//       "-" +
//       sanitized.substring(3, 5) +
//       "-" +
//       sanitized.substring(5, 9);
//   } else if (sanitized.length > 3) {
//     sanitized = sanitized.substring(0, 3) + "-" + sanitized.substring(3);
//   }
//   input.value = sanitized;
// }

// validateBtn.addEventListener("click", function () {
//   input.value = "";

//   if (input.value.length === 11) {
//     inputResult.textContent = "Valid SSN";
//     inputResult.style.color = "green";
//   } else {
//     inputResult.textContent = "Invalid SSN";
//     inputResult.style.color = "red";
//   }
//   setTimeout(() => {
//     loader.style.visibility = "visible";
//   }, 3000);
// });
