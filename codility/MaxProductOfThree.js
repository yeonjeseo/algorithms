// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let max = A[0] * A[1] * A[2];
  let triplet = max;
  for (let p = 0; p < A.length - 2; p++) {
    for (let q = p + 1; q < A.length - 1; q++) {
      for (let r = q + 1; r < A.length; r++) {
        triplet = A[p] * A[q] * A[r];
        if (triplet > max) max = triplet;
      }
    }
  }
  return max;
}

// const getPermutaton = function(arr, selectNumber) {
//     const result = [];
//     if(selectNumber === 1) return arr.map(el => [el]);

//     arr.forEach((fixed, index, origin) => {
//         const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
//         const permutation = getPermutaton(rest, selectNumber - 1);
//         const attatched = permutation.map(el => [fixed, ...el]);
//         result.push(...attatched);
//     });
//     return result;
// }
