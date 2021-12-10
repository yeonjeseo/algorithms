const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
const T = inputs[0];

for (let i = 1; i <= T; i++) {
  inputs[i] = inputs[i].split(" ").map((element) => parseInt(element));
  const [x1, y1, r1, x2, y2, r2] = inputs[i];
  const centerDist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  let result = 0;
  // 동심이냐 ? -> 반지름이 같냐 or 다르냐
  //같은 위치에 있는 경우
  if (x1 === x2 && y1 === y2) {
    // 삼항 연산자
    result = r1 === r2 ? -1 : 0;
    // result = centerDist === r1 + r2 ? -1 : 0;
  } else {
    // 중심이 다른 경우
    // 외접이냐 or 내접이냐 -> 1
    if (centerDist === r1 + r2 || centerDist === Math.abs(r1 - r2)) {
      result = 1;
    } else if (centerDist < r1 + r2 && centerDist > Math.abs(r1 - r2)) {
      result = 2;
    } else {
      result = 0;
    }
  }
  console.log(result);
}
