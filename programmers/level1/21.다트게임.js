function solution(dartResult) {
  const resultArray = [];
  let score = 0;
  for (let i = 0; i < dartResult.length; i++) {
    // 숫자 골라내기
    // 여기서 조건문 문제 발생
    if (!isNaN(dartResult[i])) {
      // 10에 대한 예외 처리
      // 0 - 9
      // 10
      // 현재 값이 숫자인데 이전 값이 1이다 -> 10이다.
      score = dartResult[i - 1] === "1" ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === "S") {
      resultArray.push(score);
    } else if (dartResult[i] === "D") {
      resultArray.push(score * score);
    } else if (dartResult[i] === "T") {
      resultArray.push(score * score * score);
    } else if (dartResult[i] === "*") {
      resultArray[resultArray.length - 2] =
        resultArray[resultArray.length - 2] * 2;
      resultArray[resultArray.length - 1] =
        resultArray[resultArray.length - 1] * 2;
    } else if (dartResult[i] === "#") {
      resultArray[resultArray.length - 1] =
        resultArray[resultArray.length - 1] * -1;
    }
  }
  console.log(resultArray);
  return resultArray.reduce((prev, curr) => prev + curr, 0);
}

// 1 + 2 * 2 + 3 * 3 * 3 * 2
