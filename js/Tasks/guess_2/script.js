
//! ----------------------------SECTIONS----------------------------//


const section1 = document.createElement("section");
section1.id = "part1";
section1.className = "container-fluid text-center";
const section2 = document.createElement("section");
section2.id = "part2";
section2.className = "container-fluid text-center";
const section3 = document.createElement("section");
section3.id = "part3";
section3.className = "container-fluid text-center";
const section4 = document.createElement("section");
section4.id = "part4";
section4.className = "container-fluid text-center";

document.body.appendChild(section1);
document.body.appendChild(section2);
document.body.appendChild(section3);
document.body.appendChild(section4);

section1.style = "width: 100%; height: 100vh; background-image: url('png.png'); background-size: cover; background-position: center; display: flex; justify-content: center; flex-direction: column; align-items: center;"
section2.style = "width: 100%; height: 100vh; background-color: pink; display: none;"
section3.style = "width: 100%; height: 100vh; background-color: green; display: none;"
section4.style = "width: 100%; height: 100vh; background-color: yellow; display: none;"

//! ----------------------------TEXTS----------------------------//


const h1 = document.createElement("h1");
h1.textContent = "Bir oyun oluşturuluyor...";
section1.appendChild(h1);
const h5 = document.createElement("h1");
h5.textContent = "Ne dersin? 😎";
section1.appendChild(h5);
const h2 = document.createElement("h1");
h2.textContent = "Hazır mısın?" ;
section2.appendChild(h2);
const h3 = document.createElement("h1");
h3.textContent = "Oyuna başlamadan önce renklere gözatabilirsin";
section3.appendChild(h3);
const h6 = document.createElement("h1");
h6.textContent = "İlk sayfada kaç adet bitter çikolata vardı?";
section4.appendChild(h6);

h1.style = "background-color: black; border-radius: 10px; opacity: 0.8;";
h5.style = "background-color: black; border-radius: 10px; opacity: 0.8;"

//? -----------------BÜTÜN H1'LERİ DEĞİŞTİR-------------------//
const allH1Elements = document.querySelectorAll('h1');

allH1Elements.forEach(h1Element => {
    h1Element.style.fontFamily = "'Kode Mono', monospace";
    h1Element.style.color = "white";
    h1Element.style.fontSize = "2rem";
});



//! ----------------------------BUTONLAR----------------------------//

const start = document.createElement("button");
start.textContent = "Başlayalım 👍🏽";
section1.appendChild(start);

start.addEventListener("click", () => {
    section1.style.display = "none";
    section2.style = "width: 100%; height: 100vh; background-color: pink; display: flex; justify-content: center; flex-direction: column; align-items: center;"
    section3.style.display = "none";   
    section4.style.display = "none";
    audio1.play();
})


const ready = document.createElement("button");
ready.textContent = "Hazırım 🤪";
section2.appendChild(ready);

ready.addEventListener("click", () => {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style = "width: 100%; height: 100vh; background-color: green; display: none; display: flex; justify-content: center; flex-direction: column; align-items: center;"
    section4.style.display = "none";
    audio3.play();
})

const baska = document.createElement("button");
baska.textContent = "Sıradaki renk lütfen 🔀";
section3.appendChild(baska);

baska.addEventListener("click", () => {
    const newColor = getRandomColor();
    section3.style.backgroundColor = newColor;
    section4.style.backgroundColor = newColor;
    audio2.play();
});


const play = document.createElement("button");
play.textContent = "Oynayalım 🏁";
section3.appendChild(play);

play.addEventListener("click", () => {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style = "width: 100%; height: 100vh; background-color: magenta; display: flex; justify-content: center; flex-direction: column; align-items: center;"
    audio3.pause();
    audio5.play();
    input.focus();
    
})


const goHome = document.createElement("button");
goHome.textContent = "İlk sayfaya git";
section4.appendChild(goHome);
start.classList.add("btn", "btn-dark");
ready.classList.add("btn", "btn-light");
baska.classList.add("btn", "btn-light", );
play.classList.add("btn", "btn-light", "mt-5");
goHome.classList.add("btn", "btn-light" , "mb-5");




//? -------------RASTGELE RENK OLUŞTURMA-----------------//
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



//? ------------------ SOUND EFFECT ----------------------//

const audio1 = new Audio('sonkarar.mp3');
const audio2 = new Audio('magic1.mp3');
const audio3 = new Audio('kahoot_lobi.mp3');
const audio5 = new Audio('kahoot.mp3');
const audio4 = new Audio('alarm.mp3');
const audio6 = new Audio('congratulations.mp3');
//? -------------------- VİDEO ----------------------------//

const video1 = document.createElement("video");
video1.src = "deneme.mp4";
video1.width = 600;
video1.height = 600;
video1.style.display = "none";
video1.style.borderRadius = "10px";
section4.appendChild(video1);


//! ----------------------GUESS THE NUMBER----------------------//


goHome.addEventListener("click", () => {
    audio4.play();
})

const input = document.createElement("input");
input.type = "number";
input.style.width = "10rem";
input.style.height = "2rem";
input.style.borderRadius = "10px";
input.style.textAlign = "center";
input.style.fontSize = "1.5rem";
section4.appendChild(input);

const check = document.createElement("button");
check.textContent = "Kontrol Et";
check.classList.add("btn", "btn-light", "mt-5");
section4.appendChild(check);

const resultMessage = document.createElement("p");
resultMessage.style.fontSize = "1.2rem";
section4.appendChild(resultMessage);




// (Önceki Kod)

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkNumber();
    }
});

check.addEventListener("click", checkNumber);

function checkNumber() {
    const inputValue = parseInt(input.value);

    if (isNaN(inputValue)) {
        resultMessage.textContent = "Lütfen bir sayı girin.";
    } else {
        if (inputValue < 0) {
            resultMessage.textContent = "Yukarı çık!";
        } else if (inputValue > 0) {
            resultMessage.textContent = "Aşağı in!";
        } else {
            resultMessage.textContent = "Hepsi sütlüydü 🤣 ";
            video1.style.display = "block";
            video1.play();
            setTimeout(() => {
                video1.style.display = "none";
            }, 5000);
            audio5.pause();
            audio6.play();
            setTimeout(() => {
                video1.style.display = "none";
                audio5.pause();
                audio6.play();

                // 5 saniye sonra section4'ü gizle, section1'i görünür yap
                section4.style.display = "none";
                section1.style.display = "flex";
            }, 5000);
        }
    }

    input.value = "";
    input.focus();
}



//! --------------------MEDİA QUERİES----------------------

const mediaQuery = window.matchMedia("(max-width: 468px)");
function handleMediaQuery() {
    if (mediaQuery.matches) {
      video1.width = 400;
      video1.height = 400;
    }
  }

  handleMediaQuery();
window.addEventListener("resize", handleMediaQuery);