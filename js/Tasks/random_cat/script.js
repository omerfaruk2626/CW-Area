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

    // const cardBody = document.createElement("div");
    // cardBody.classList.add("card-body");

    // Add your card title and text here
    // const cardTitle = document.createElement("h5");
    // cardTitle.classList.add("card-title");
    // cardTitle.textContent = "Cat Title";

    // const cardText = document.createElement("p");
    // cardText.classList.add("card-text");
    // cardText.textContent = "Cat Description";

    // const cardButton = document.createElement("a");
    // cardButton.href = "#";
    // cardButton.classList.add("btn", "btn-primary");
    // cardButton.textContent = "Go somewhere";

    // Uncomment the following lines if you define cardTitle and cardText
    // cardBody.appendChild(cardTitle);
    // cardBody.appendChild(cardText);

    // cardBody.appendChild(cardButton);
    // card.appendChild(catImage);
    // card.appendChild(cardBody);

    // catContainer.appendChild(card);
  });
};


const button = document.querySelector(".btn");
button.addEventListener("click", randomCats);
