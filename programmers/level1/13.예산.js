function solution(d, budget) {
  // 부서별 필요 예산 오름차순 정렬
  let count = 0;
  let depart = 0;
  d = d.sort((a, b) => a - b);

  while (true) {
    // 예산 먼저 비교
    if (budget >= d[0]) {
      // 지원 가능하면
      budget -= d.shift();
      count++;
    } else break;
  }
  return count;
}
