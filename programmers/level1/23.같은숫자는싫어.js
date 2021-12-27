function solution(arr) {
  const answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    //answer 배열 마지막 요소랑 현재 인덱스 요소랑 비교
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }
  return answer;
}
