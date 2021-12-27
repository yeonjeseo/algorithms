function solution(arr, divisor) {
  let answer = arr.filter((number) => {
    return number % divisor === 0;
  });

  if (answer.length === 0) {
    answer.push(-1);
    return answer;
  }

  return answer.sort((a, b) => {
    return a - b;
  });
}
