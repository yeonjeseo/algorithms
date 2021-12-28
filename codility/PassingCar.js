// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length >= 100000) return -1;
  let total = 0;
  let count = 0;
  A.forEach((element) => {
    if (element === 0) {
      count++;
    } else {
      total += count;
    }
  });
  return total;
}
