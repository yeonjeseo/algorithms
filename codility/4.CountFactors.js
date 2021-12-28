/* A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:

function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647]. */

// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   // shit
//   let count = 0;
//   for (i = 2; i < N; i++) {
//     if (N % i == 0) count++;
//   }
//   count += 2;
//   return count;
// }

// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   // shit
//   // N = 2?
//   if(N === 1) return 1;
//   if(N === 2) return 2;
//   let count = 0;
//   for (i = 2; i < N; i++) {
//     if (N % i == 0) count++;
//   }
//   count += 2;
//   return count;
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   // 제곱의 경우 약수의 개수 홀수
//   // 제곱이 아닐 경우 약수의 개수 짝수
//   // 1 : 1개
//   // 2 : 2개
//   if(N === 1 || N === 2) return N;

//   let count = 0;
//   for(let i = 2 ; i < Math.sqrt(N); i++){
//       if(N % i === 0) count ++;
//   }

//   // 약수를 반만 구하고 2를 곱한다..
//   count *= 2;
//   // 1을 제외하고 반복문을 돌리므로
//   // 제곱일 경우에는 +1을 해야 하고 아닐 경우에는 +2
//   Math.sqrt(N) % 1 === 0 ? count += 1 : count += 2;
//   return count;
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (N === 1 || N === 2) return N;

  let count = 0;
  for (let i = 1; i < Math.sqrt(N); i++) {
    if (N % i === 0) count++;
  }

  // 1은 제외하고 2부터 나누니까 +1은 무조건 해야 하고
  // 제곱이다 -> * 2 + 2
  // 제곱이 아니다
  count *= 2;
  if (Math.sqrt(N) % 1 === 0) count++;

  return count;
}
