let inputs = require("fs").readFileSync("input.txt").toString().split(" ");

const up = parseInt(inputs[0]),
  down = parseInt(inputs[1]),
  height = parseInt(inputs[2]);

const days = (height - down) / (up - down);

(height - down) % (up - down) === 0
  ? console.log(days)
  : console.log(Math.ceil(days));
