let inputs = require("fs").readFileSync("input.txt").toString().split("\n");
inputs.pop();
inputs = inputs.map((input) => parseInt(input));
inputs.forEach((input) => {
  if (!input) return;
  let count = 0;
  for (let i = input + 1; i <= input * 2; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count += 1;
  }
  console.log(count);
});
