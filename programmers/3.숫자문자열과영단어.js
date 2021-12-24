function solution(s) {
  const letters = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  letters.forEach((letter, index) => {
    // replaceAll 처럼 쓰기 위해서 정규표현식 사용
    const regExp = new RegExp(letter, "gi");
    // 해당 문자 = index이므로 매칭되는 요소가 있으면 index로 바꿔줌
    // match => 결과  null이거나 배열이 반환
    // 삼항 연산자로 처리 할 수 있겠다. true or false
    s = s.match(regExp) ? s.replace(regExp, String(index)) : s;
  });
  return Number(s);
}
