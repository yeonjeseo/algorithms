function solution(s) {
  //문자열 길이 홀 짝에 따라 분기처리
  if (s.length % 2 === 1) return s[Math.floor(s.length / 2)];
  else return s[s.length / 2 - 1] + s[s.length / 2];
}
