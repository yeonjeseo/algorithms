let inputs = require("fs").readFileSync("input.txt").toString().split("\n");
inputs.pop();
inputs = inputs.map((input) => parseInt(input));
for (let num of inputs) {
  if (num === 0) {
    break;
  }

  const n = num + 1;
  const m = num * 2;
  const isPrimeNumArr = new Array(m + 1);
  let counter = 0;

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(i, 2); square <= m; square += i) {
        isPrimeNumArr[square] = false;
      }
    }
  }
  for (let i = n; i <= m; i++) {
    if (isPrimeNumArr[i]) {
      counter++;
    }
  }
  console.log(counter);
}
