const randomCats = async () => {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_ePXzL7dCEgpWeuGc9fQ2ehJyWxuCFYF5f8Iq5j4qn2l5EszalROaoMuC01eNbeio";
  
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
  
    catContainer.innerHTML = "";
  
    cats.forEach((cat) => {
      // Create card element
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
  
      // Create image element
      const catImage = document.createElement("img");
      catImage.src = cat.url;
      catImage.classList.add("card-img-top");
      catImage.alt = cat.id;
  
      // Create card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      // Create card title and text (You can customize this part)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Cat Title";
  
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  
      // Create a button (You can customize this part)
      const cardButton = document.createElement("a");
      cardButton.href = "#";
      cardButton.classList.add("btn", "btn-primary");
      cardButton.textContent = "Go somewhere";
  
      // Append elements to the card body
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardButton);
  
      // Append image and card body to the card
      card.appendChild(catImage);
      card.appendChild(cardBody);
  
      // Append the card to the cat container
      catContainer.appendChild(card);
    });
  };
  
  const button = document.querySelector(".btn");
  button.addEventListener("click", randomCats);
  