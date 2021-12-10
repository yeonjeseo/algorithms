const inputs = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const sequence = inputs[0].split(",").map((number) => Number(number.trim()));
const handed = inputs[1];
let solution = "";
const keypad = {
  1: [0, 3],
  2: [1, 3],
  3: [2, 3],
  4: [0, 2],
  5: [1, 2],
  6: [2, 2],
  7: [0, 1],
  8: [1, 1],
  9: [2, 1],
  "*": [0, 0],
  0: [1, 0],
  "#": [2, 0],
};
let leftPos = keypad["*"];
let rightPos = keypad["#"];
sequence.forEach((number) => {
  if (number % 3 === 1) {
    solution += "L";
    leftPos = keypad[number];
  } else if (number % 3 === 0 && number !== 0) {
    solution += "R";
    rightPos = keypad[number];
  } else {
    const [leftDist, rightDist] = getDistance(leftPos, rightPos, number);
    solution += chooseHand(leftDist, rightDist, handed);
    if (chooseHand(leftDist, rightDist, handed) === "R") {
      rightPos = keypad[number];
    } else {
      leftPos = keypad[number];
    }
  }
});

function getDistance(leftPos, rightPos, target) {
  const leftDist =
    Math.abs(keypad[target][0] - leftPos[0]) +
    Math.abs(keypad[target][1] - leftPos[1]);
  const rightDist =
    Math.abs(keypad[target][0] - rightPos[0]) +
    Math.abs(keypad[target][1] - rightPos[1]);
  return [leftDist, rightDist];
}

function chooseHand(leftDist, rightDist, handed) {
  if (leftDist === rightDist) return handed === "right" ? "R" : "L";
  return leftDist > rightDist ? "R" : "L";
}

console.log(solution);
