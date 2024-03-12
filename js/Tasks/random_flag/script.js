const URL = "https://restcountries.com/v3.1/all";
const btn = document.getElementById("btn");
const title = document.querySelector(".card-title");
const text = document.querySelector(".card-text");
const img = document.querySelector(".card-img-top");
const cardBody = document.querySelector(".card-body");

btn.addEventListener("click", () => {
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            const random = Math.floor(Math.random() * data.length);
            img.src = data[random].flags.png;
            title.innerText = data[random].name.common;
            text.innerText = "Capital:" + " " + data[random].capital;
            console.log(data[random]);
        })
        .catch((error) => cardBody.style = "background-image url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80;");
});
