const plusBtn = document.querySelector(".fa-plus");
const minusBtn = document.querySelector(".fa-minus");
const productPrice = document.querySelector("#product-price");
const totalprice = document.querySelector("#total-price");
const discountedPrice = document.querySelector("#discounted-price");
const plusMinusDivs = document.querySelectorAll(".plus-minus");
const quantity = document.querySelector(".quantity");
const deleteBtn = document.querySelector(".fa-trash-can");
const dollar = document.querySelector(".dollar");

// productPrice.textContent = parseFloat(productPrice.textContent).toFixed(2) * parseFloat(quantity.textContent).toFixed(2);

plusMinusDivs.forEach((div) => {
  const quantity = div.querySelector(".quantity");
  const plusBtn = div.querySelector(".fa-plus");
  const minusBtn = div.querySelector(".fa-minus");
  const productPrice = document.querySelector("#product-price");
  const discountedPrice = document.querySelector("#discounted-price");

  plusBtn.addEventListener("click", () => {
    quantity.textContent = parseInt(quantity.textContent) + 1;
    productPrice.textContent =
      parseFloat(discountedPrice.textContent) +
      parseFloat(productPrice.textContent);
  });

  minusBtn.addEventListener("click", () => {
    if (parseInt(quantity.textContent).toFixed(2) > 1) {
      quantity.textContent = parseInt(quantity.textContent).toFixed(2) - 1;
      if (parseInt(quantity.textContent).toFixed(2) !== 0) {
        productPrice.textContent =
          parseFloat(productPrice.textContent).toFixed(2) -
          parseFloat(discountedPrice.textContent).toFixed(2);
      }
    }
  });
});
