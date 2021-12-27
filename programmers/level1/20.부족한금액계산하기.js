function solution(price, money, count) {
  let diff = money;
  for (let i = 1; i <= count; i++) {
    diff -= price * i;
  }
  return diff > 0 ? 0 : Math.abs(diff);
}
