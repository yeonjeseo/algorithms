const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
const [T, ...dataSet] = inputs;

const stack = [];
const result = dataSet.map((data) => Number(data));

for (let i = 0; i < result.length; i++) {
  result[i] ? stack.push(result[i]) : stack.pop();
}

const sum = stack.reduce((prev, curr) => prev + curr, 0);
console.log(sum);
