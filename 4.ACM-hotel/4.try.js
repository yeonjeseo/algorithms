const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
const cases = parseInt(inputs[0]);

for (let i = 1; i <= cases; i++) {
  // w : 방 수, h : 층 수, n : 손님
  const [h, w, n] = inputs[i].split(" ").map((arg) => parseInt(arg));
  const floor = n % h === 0 ? h.toString() : (n % h).toString();
  const horizontal = Math.ceil(n / h).toString();
  const roomNum = floor + horizontal.padStart(2, "0");
  console.log(roomNum);
}
