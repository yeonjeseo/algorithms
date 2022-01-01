// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};

  for (let char of S) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }

  let arr = Object.values(obj).sort((a, b) => a - b);
  let seen = new Set();
  let deletions = 0;
  for (let count of arr) {
    if (!seen.has(count)) seen.add(count);
    else {
      while (seen.has(count)) {
        count--;
        deletions++;
      }
      if (count > 0) seen.add(count);
    }
  }
  return deletions;
}
