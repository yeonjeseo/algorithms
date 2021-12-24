function solution(lottos, win_nums) {
  // lottos 배열에서 win_nums 요소랑 매치 개수 : 최소로 맞추는 개수 (min)
  // 0의 개수 : 포텐셜? (p)
  // min + 0의 개수 : 최대로 맞추는 개수
  // min : 최소로 맞추는 개수
  // 순위 : 7 - 맞춘 개수
  const p = lottos.filter((lotto) => lotto === 0).length;
  let matching = 0;
  lottos.forEach((lotto) => {
    win_nums.forEach((win) => {
      if (lotto === win) matching++;
    });
  });

  // 7위 이상은 6위로 처리
  const minPrize = 7 - matching >= 7 ? 6 : 7 - matching;
  // 찍은게 없는 경우 중 다 틀릴 때 p = 0, matching = 0
  const maxPrize = 7 - matching - p >= 7 ? 6 : 7 - matching - p;
  return [maxPrize, minPrize];
}
