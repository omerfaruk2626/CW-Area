const idNumber = "11111111110";
const digits = idNumber.split("").map(Number);
console.log(digits);

const ten =
  ((digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7 - (digits[1] + digits[3] + digits[5] + digits[7])) % 10;
const eleven = (digits.slice(0, 9).reduce((a, b) => a + b) + ten) % 10;

console.log(digits);
console.log(ten);
console.log(eleven);
