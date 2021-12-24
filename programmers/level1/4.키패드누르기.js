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

function solution(numbers, hand) {
  const handed = hand;
  const sequence = numbers;
  let solution = "";
  // 왼손 위치 & 오른손 위치
  // 가운데 키패드를 누를 상황에서 왼손 거리 & 오른손 거리
  // 주 손

  // 초기 위치 왼손 : * 오른손 : #
  let leftPos = keypad["*"]; // [0,0]
  let rightPos = keypad["#"]; // [2,0]

  sequence.forEach((number) => {
    if (number % 3 === 1) {
      solution += "L";
      leftPos = keypad[number]; //[0, 3]
    } else if (number % 3 === 0 && number !== 0) {
      solution += "R";
      rightPos = keypad[number];
    } else {
      // 가운데 열
      // const [leftDist, rightDist] = getDistance(leftPos, rightPos, number, handed);
      // let result = chooseHand(leftDist, rightDist, handed)
      const result = getDistance(leftPos, rightPos, number, handed);

      solution += result;
      //위치 업데이트
      if (result === "R") {
        rightPos = keypad[number];
      } else {
        leftPos = keypad[number];
      }
    }
  });

  return solution;
}

// 거리 계산 함수 : 왼손위치, 오른손 위치, 누르고자 하는 번호
// 조건 : 손가락은 상하좌우로만 움직인다.
function getDistance(leftPos, rightPos, target) {
  const leftDist =
    Math.abs(keypad[target][0] - leftPos[0]) +
    Math.abs(keypad[target][1] - leftPos[1]);
  const rightDist =
    Math.abs(keypad[target][0] - rightPos[0]) +
    Math.abs(keypad[target][1] - rightPos[1]);

  if (leftDist === rightDist) return handed === "right" ? "R" : "L";
  return leftDist > rightDist ? "R" : "L";
  // return [leftDist, rightDist];
}

function chooseHand(leftDist, rightDist, handed) {
  if (leftDist === rightDist) return handed === "right" ? "R" : "L";
  return leftDist > rightDist ? "R" : "L";
}
