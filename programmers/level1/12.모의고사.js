function solution(answers) {
  // answers는 정답 배열
  // 세 명이 문제를 찍음
  // 1번 수포자 : 12345.....
  // 2번 수포자 : 21232425.....
  // 3번 수포자 : 3311224455...

  // 1번이 문제를 풀 경우
  const dumb1 = [1, 2, 3, 4, 5];
  const dumb2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const dumb3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const correct = new Array(3);
  const answer = [];
  correct.fill(0);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === dumb1[i % 5]) correct[0]++;
    if (answers[i] === dumb2[i % 8]) correct[1]++;
    if (answers[i] === dumb3[i % 10]) correct[2]++;
  }

  console.log(correct);
  let max = correct[0];
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] > max) max = correct[i];
  }

  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === max) answer.push(i + 1);
  }
  console.log(answer);
  return answer;
}
