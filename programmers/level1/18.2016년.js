function solution(a, b) {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const dayMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let fullDay = 0;
  for (let i = 0; i < a - 1; i++) {
    fullDay += dayMonth[i];
  }
  fullDay += b;
  return day[(fullDay - 1) % 7];
}
