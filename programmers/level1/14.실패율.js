function solution(N, stages) {
  const players = stages.length;
  // 1 번 실패율 : 1 / 8 = 제일 낮음
  // 2 번 실패율 : 3 / 7 < 50%
  // 3 번 실패율 : 2 / 4 = 50%
  // 4 번 실패율 : 1 / 2 = 50%
  // 5 번 실패율 : 0 / 1 = 0 %
  // => [3, 4, 2, 1, 5]
  const result = [];
  const failRate = [];
  let reach = 0;
  let complete = 0;
  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    //스테이지 도달
    // 필터 빼고
    // reach = stages.filter(stage => stage >= i).length;
    // failRate.push([complete/reach, i]);

    complete = stages.filter((stage) => stage === i).length;
    // 인덱스 의미를 살려야 할 때, 2차원배열
    failRate.push([complete / total, i]);
    total -= complete;
  }

  failRate.sort((a, b) => b[0] - a[0]);
  failRate.forEach((element) => result.push(element[1]));

  return result;
}
