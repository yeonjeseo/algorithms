function solution(a, b) {
  let max = a > b ? a : b;
  let sum = 0;
  for (let i = a + b - max; i <= max; i++) {
    sum += i;
  }
  return sum;
}
