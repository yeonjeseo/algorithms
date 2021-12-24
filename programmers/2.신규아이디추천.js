function solution(new_id) {
  let answer = new_id;
  // 1. 소문자 변환
  // 2. [^] 사용 : 알파벳 숫자 - _ . 빼고 전부 빈 문자열 치환
  // 3. 마침표 연속 -> 1개로 치환
  // 4. 처음, 끝 마침표 제거
  answer = answer
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .split(".")
    .filter((element) => {
      if (element.length > 0) return element;
    })
    .join(".");
  // 5. 빈 문자열 -> a 로 바꿈
  if (answer === "") answer += "a";
  // 6. 16자 이상일 경우, 첫 15자만 추출, .으로 끝나면 . 잘라내기
  if (answer.length >= 16) answer = answer.substring(0, 15);
  if (answer.endsWith(".")) answer = answer.substring(0, 14);
  // 7. 2자 이하일 경우, 길이 3 될 때까지 제일 끝 문자 반복
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}
