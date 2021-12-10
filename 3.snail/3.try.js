let inputs = require("fs").readFileSync("input.txt").toString().split(" ");

const up = parseInt(inputs[0]),
  down = parseInt(inputs[1]),
  height = parseInt(inputs[2]);

let days = 1;
let distance = 0;
while (1) {
  distance += up;
  if (distance >= height) {
    console.log(days);
    break;
  }
  distance -= down;
  days++;
}
