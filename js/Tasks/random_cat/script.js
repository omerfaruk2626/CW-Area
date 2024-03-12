//! Açılışta loader 3.5 saniye gözükecek ve kaybolacak. O kaybolduğunda buton ve date bilgisi gözükecek.
const openLoader = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    button.style.display = "block";
    dateArea.style.display = "block";
  }, 3500);
};


window.addEventListener("load", () => {
  button.style.display = "none";
  dateArea.style.display = "none";
  openLoader();
});


//! Date ve Time bilgisi eklenecek
const dateArea = document.getElementById("date");

function updateDateTime() {
  const currentDate = new Date();
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

  dateArea.innerHTML = `${formattedDate} - ${formattedTime}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);


//! API ile resimler random olarak eklenecek
const randomCats = async () => {
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=beng&api_key=live_ePXzL7dCEgpWeuGc9fQ2ehJyWxuCFYF5f8Iq5j4qn2l5EszalROaoMuC01eNbeio";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const data = await response.json();
    displayCats(data);
  } catch (error) {
    console.log(error);
  }
};

//! Ekrana resimler eklenecek
const displayCats = (cats) => {
  const catContainer = document.querySelector(".cat-container");
  catContainer.style.display = "flex";
  catContainer.style.flexWrap = "wrap";
  catContainer.style.gap = "10px";

  catContainer.innerHTML = "";

  cats.forEach((cat) => {
    const catImage = document.createElement("img");
    catImage.style.width = "300px";
    catImage.style.height = "300px";
    catImage.style.borderRadius = "10px";
    catImage.src = cat.url;
    catContainer.append(catImage);
  });
};

//! Butona tıklandıgında random resimler eklenecek
const button = document.querySelector(".btn");
button.addEventListener("click", randomCats);
