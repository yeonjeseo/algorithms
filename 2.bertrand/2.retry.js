let inputs = require("fs").readFileSync("input.txt").toString().split("\n");
inputs.pop();
inputs = inputs.map((input) => parseInt(input));

inputs.forEach((input) => {
  input === 1
    ? console.log(1)
    : console.log(checkPrime(input * 2) - checkPrime(input + 1));
});

function checkPrime(n) {
  let count = 0;
  const isPrimeArr = new Array(n + 1);
  isPrimeArr.fill(true);
  isPrimeArr[0] = isPrimeArr[1] = false;
  for (let i = 2; i < n; i++) {
    if (isPrimeArr[i]) {
      let m = 2;
      count++;
      while (i * m < isPrimeArr.length) {
        isPrimeArr[i * m] = false;
        m++;
      }
    }
  }
  return count;
}
