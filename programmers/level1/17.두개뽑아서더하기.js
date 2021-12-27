function solution(numbers) {
  const pick = [];
  let temp = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    // 조합 만드는 반복문
    for (let j = i + 1; j < numbers.length; j++) {
      pick.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(pick.sort((a, b) => a - b));
  return [...set];
}
