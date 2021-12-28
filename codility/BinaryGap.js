/* A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. */

// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const input = N.toString(2);

//   let cnt = 0;
//   let max = 0;
//   let start = false;
//   for (let i = 0; i < input.length; i++) {
//     //갭이 시작하는지 확인
//     if (i > 0 && input[i] === "0" && input[i - 1] === "1") {
//       start = true;
//     }
//     //갭이 시작했고, 현재 값이 0이면 길이 ++
//     if (start && input[i] === "0") {
//       cnt++;
//     }

//     //갭이 끝나는지 확인
//     // 갭이 끝난 뒤 max 비교
//     if (i > 0 && input[i - 1] === "0" && input[i] === "1") {
//       if (cnt > max) {
//         max = cnt;
//         cnt = 0;
//       }
//       start = false;
//     }
//   }
//   return max;
// }
/* 
n=561892=10001001001011100100 ----> 3
n=74901729=100011101101110100011100001
n=1376796946=1010010000100000100000100010010 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const input = N.toString(2);
  console.log(input);
  let cnt = 0;
  let max = 0;
  let start = false;
  for (let i = 0; i < input.length; i++) {
    //갭이 시작하는지 확인
    if (i > 0 && input[i] === "0" && input[i - 1] === "1") {
      start = true;
    }
    //갭이 시작했고, 현재 값이 0이면 길이 ++
    if (start && input[i] === "0") {
      cnt++;
      console.log("index : " + i + "    cnt : " + cnt);
    }

    //갭이 끝나는지 확인
    // 갭이 끝난 뒤 max 비교
    if (i > 0 && input[i - 1] === "0" && input[i] === "1") {
      if (cnt > max) {
        max = cnt;
      }
      cnt = 0;
      start = false;
    }
  }
  console.log(max);
  return max;
}
/* 
  끝나면 max와 cnt 비교에 상관 없이 cnt는 0으로 초기화했었어야 했는데 
  cnt = 0 을 if문 안에 넣었었다.
  그래서 cnt가 max를 넘어야만 cnt가 초기화되는 문제가 발생했음.
 */
