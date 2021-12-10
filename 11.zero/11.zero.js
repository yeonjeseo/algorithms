const inputs = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [T, ...dataSet] = inputs;

const result = dataSet
  .map((data) => Number(data))
  .reduce((prev, curr) => {
    if (curr) {
      prev.push(curr);
    } else {
      prev.pop();
    }
    return prev;
  }, [])
  .reduce((prev, curr) => prev + curr, 0);

console.log(result);
