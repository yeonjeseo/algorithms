const inputs = require("fs").readFileSync("input.txt").toString();

const original = inputs[0];
let result = "";
let lastDigit = "";
let firstDigit = "";
let cycle = 0;
let sumLastDigit = 0;
result = original.length == 2 ? original : original.padStart(2, "0");
while (true) {
  firstDigit = result[0];
  lastDigit = result[1];
  sumLastDigit = (parseInt(firstDigit) + parseInt(lastDigit)) % 10;
  result = lastDigit + sumLastDigit.toString();
  cycle++;
  if (parseInt(result) === parseInt(original)) break;
}

console.log(cycle);
