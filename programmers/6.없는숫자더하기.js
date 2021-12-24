function solution(numbers) {
  // 0 - 9 사이의 숫자 중 없는 숫자 찾아 더하기
  // 1 - 9 전체 합에서 현재 들어온 입력값 합 빼면 됨
  // 검색해서 풀어보기
  return 45 - numbers.reduce((prev, curr) => prev + curr, 0);
}
