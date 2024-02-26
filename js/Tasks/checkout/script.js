const plusbtn = document.querySelector(".fa-plus");
const minusbtn = document.querySelector(".fa-minus");
const pruductprice = document.querySelector("#product-price");
const discount = document.querySelector("#discount");
const totalprice = document.querySelector("#total-price");
const discountedprice = document.querySelector("#discounted-price");





const plusMinusDivs = document.querySelectorAll('.plus-minus');


plusMinusDivs.forEach((div) => {
  const quantity = div.querySelector('.quantity');
  const plusBtn = div.querySelector('.fa-plus');
  const minusBtn = div.querySelector('.fa-minus');


  plusBtn.addEventListener('click', () => {
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });

  minusBtn.addEventListener('click', () => {
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
    }
  });
});



