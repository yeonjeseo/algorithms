let netWeight = require("fs").readFileSync("input.txt").toString();
let count = 0;
while (true) {
  if (netWeight % 5 === 0) {
    console.log(count + parseInt(netWeight / 5));
    break;
  } else if (netWeight < 0) {
    console.log(-1);
    break;
  }
  count++;
  netWeight -= 3;
}
