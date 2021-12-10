const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let day = 0;
  let count = 0;
  const answer = [];
  let progress = 0;
  while (progresses[0]) {
    progress = progresses[0] + day * speeds[0];
    if (progress >= 100) {
      // 배포 가능하면
      count++;
      progresses.shift();
      speeds.shift();
    } else {
      // 배포 불가능하면 뭘 해야 하지?
      // 배포 완료된 기능이 있는 경우
      if (count) {
        answer.push(count);
      }
      day++;
      count = 0;
    }
  }
  answer.push(count);

  return answer;
}

console.log(solution(progresses, speeds));
