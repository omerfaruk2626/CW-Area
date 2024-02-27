const input = document.getElementById("input");
const validateBtn = document.getElementById("validateBtn");
const inputResult = document.getElementById("inputResult");


function formatSSN(input) {
  // Girilen değerden "-" işaretlerini kaldır
  var sanitized = input.value.replace(/[^0-9]/g, '');

  // "-" işaretlerini uygun konumlara ekle
  if (sanitized.length > 5) {
    sanitized = sanitized.substring(0, 3) + '-' + sanitized.substring(3, 5) + '-' + sanitized.substring(5, 9);
  } else if (sanitized.length > 3) {
    sanitized = sanitized.substring(0, 3) + '-' + sanitized.substring(3);
  }

  // Formatlanmış değeri inputa geri yaz
  input.value = sanitized;
}

validateBtn.addEventListener("click", function () {
  if (input.value.length === 11) {
    inputResult.textContent = "Valid SSN";
    inputResult.style.color = "green";
  } else {
    inputResult.textContent = "Invalid SSN";
    inputResult.style.color = "red";
  }
})

