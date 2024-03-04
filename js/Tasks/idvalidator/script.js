const btn = document.querySelector(".btn");
const number = document.querySelector("#number");
//? btn dinlemeye başlar

btn.addEventListener("click", () => {
  let id = number.value;
  const arrID = id.split(""); // input alanı string olduğu için split ile dizide tuttuk
  let even = 0;
  let odd = 0;
  const ten = arrID.reduce((acc, cur, i) => {
    if (i < 9) {
      if (i % 2 !== 0) {
        odd += Number(cur); //2nd, 4th, 6th and 8th digits
      } else {
        even += Number(cur); //1st, 3rd, 5th, 7th and 9th digits
      }
    }
    acc = (even * 7 - odd) % 10;
    return acc;
  }, 0);
  console.log(ten);
  // let eleven =
  if (arrID === "" || arrID[0] === 0 || arrID.length < 9) {
    alert("Wrong ID");
  } else {
  }
});