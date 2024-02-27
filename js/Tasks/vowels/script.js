const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.getElementById("red");
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "ü", "Ü", "ö", "Ö"];
const outputArea = document.getElementById("output");

outputArea.style.visibility = "hidden";
input.focus();
btn.addEventListener("click", function () {
    let count = 0;
    for (let i = 0; i < input.value.length; i++) {
        if (vowels.includes(input.value[i])) {
            count++;
        }
    }
outputArea.style.visibility = "visible";
    output.textContent = count;
    setTimeout(() => {
        input.value = "";
        output.textContent = "";
        outputArea.style.visibility = "hidden";
    }, 2000);
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Delete" || e.key === "Backspace") {
        input.click();
    } else if (e.key === "Enter") {
        btn.click();
    }
});
