function solution(left, right) {
  let count;
  let sum = 0;
  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    console.log(count);
    count % 2 ? (sum -= i) : (sum += i);
  }
  return sum;
}
