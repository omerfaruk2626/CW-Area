const input = document.getElementById("input");
const validateBtn = document.getElementById("validateBtn");
const inputResult = document.getElementById("inputResult");
const loader = document.querySelector(".loader");

validateBtn.addEventListener("click", function () {
  validateBtn.textContent = "Validating...";
  input.style.backgroundColor = "#ffdcdc"
   
  setTimeout(function () {
   loader.style.display = "block";
    inputResult.textContent = input.value;
    if (input.value.length === 9) {
      if (/^[0-9]+$/.test(input.value)) {
        inputResult.style.color = "green";
        inputResult.textContent = "Valid SSN";
        input.style.backgroundColor = "#ffdcdc"
      } else {
        inputResult.style.color = "red";
        inputResult.textContent = "Invalid SSN";
        input.style.backgroundColor = "#ffdcdc"
      }
    } else {
      inputResult.style.color = "black";
      inputResult.textContent = "Input length must be 9";
      input.style.backgroundColor = "#ffdcdc"
    }
    validateBtn.textContent = "Validate";
    input.value = "";
  }, 1000);
  input.style.backgroundColor = "#ffdcdc";
  
});
