// 1트
function solution(n) {
  let count = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      //2 ~ 자기자신 - 1 사이중 나누어떨어지면 소수가 아니므로 다 돌 필요 없음
      if (i % j === 0) break;
      if (j === i - 1) count++;
    }
  }
  return count;
}

//2트 : 에라토스테네스의 체
