function solution(n) {
  //에라토스테네스의 체
  // 인덱스를 숫자로 활용한다.
  // 일단 0 1을 제외한 모든 숫자를 소수라 가정한다
  const arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  for (let i = 2; i * i < arr.length; i++) {
    //현재 인덱스 요소가 true일 때만
    if (arr[i]) {
      // 해당 인덱스를 제외한 배수들을 모두 false로 바꾼다
      // i = 3 => 6, 9, 12 .... : false
      for (let j = i * i; j <= arr.length; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((element) => element).length;
}
