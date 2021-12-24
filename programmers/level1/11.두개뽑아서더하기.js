// 1트
function solution(numbers) {
  const pick = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      pick.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(pick.sort((a, b) => a - b));
  return [...set];
}

// 2트 - 배열 메서드 안 쓰고 for문 내에서 다 처리하기
