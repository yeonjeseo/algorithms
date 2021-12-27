function solution(s) {
  //대문자는 소문자보다 작다
  //문자열 내림차순
  // cbaZBA
  return s.split("").sort().reverse().join("");
}
