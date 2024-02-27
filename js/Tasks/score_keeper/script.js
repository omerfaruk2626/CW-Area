const player1btn = document.querySelector("#player1");
const player2btn = document.querySelector("#player2");
const resetbtn = document.querySelector("#reset");
const score = document.querySelector("#score");
const player1Display = document.querySelector("#player1Display");
const player2Display = document.querySelector("#player2Display");
const audio1 = document.querySelector("#lm");
const audio2 = document.querySelector("#friends");

// player1btn.addEventListener('click', function () {

// })

player1btn.addEventListener("click", function () {
  if (player1Display.textContent < score.value) {
    player1Display.textContent = parseInt(player1Display.textContent) + 1;
    if (player1Display.textContent == score.value) {
      player2Display.style = "color: red; font-weight: 900;";
      player1Display.style = "color: green; font-weight: 900;";
      audio1.play();
      score.value = "";
      setTimeout(function () {
        player2Display.style = "color: white; ";
        player1Display.style = "color: white;";
        player1Display.textContent = 0;
        player2Display.textContent = 0;
      }, 3000)
    }
  }
});
player2btn.addEventListener("click", function () {
  if (player2Display.textContent < score.value) {
    player2Display.textContent = parseInt(player2Display.textContent) + 1;
    if (player2Display.textContent == score.value) {
      player2Display.style = "color: green; font-weight: 900;";
      player1Display.style = "color: red; font-weight: 900;";
      audio2.play();
      score.value = "";
      setTimeout(function () {
        player2Display.style = "color: white; ";
        player1Display.style = "color: white;";
        player1Display.textContent = 0;
        player2Display.textContent = 0;
      }, 3000)
    }
  }
});
resetbtn.addEventListener("click", function () {
  player1Display.textContent = 0;
  player2Display.textContent = 0;
  score.value = "";
  player2Display.style = "color: white; ";
  player1Display.style = "color: white;";
});
