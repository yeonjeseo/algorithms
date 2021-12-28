// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set(A);
  return [...set].length;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  for (let key of A) {
    obj[key] = true;
  }
  return Object.keys(obj).length;
}
