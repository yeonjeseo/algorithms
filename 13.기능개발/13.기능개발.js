const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let day = 0;
  let count = 0;
  const answer = [];
  while (progresses.length !== 0) {
    if (progresses[0] + day * speeds[0] >= 100) {
      console.log("여기?");
      progresses.slice();
      speeds.slice();
      count++;
      continue;
    } else {
      answer.push(count);
      count = 0;
    }
    day++;
  }
  return answer;
}

console.log(solution(progresses, speeds));
