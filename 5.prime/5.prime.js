const inputs = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((input) => parseInt(input));

const [min, max] = inputs;
const isPrimeArr = new Array(max + 1).fill(true);
isPrimeArr[0] = isPrimeArr[1] = false;

for (let i = 2; i <= max; i++) {
  let m = 2;
  if (isPrimeArr[i]) {
    while (i * m <= max) {
      isPrimeArr[i * m] = false;
      m++;
    }
  }
}

console.log(isPrimeArr);
