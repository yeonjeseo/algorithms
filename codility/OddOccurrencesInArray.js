/* A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times. */

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   // 홀수들이 들어있는 배열
//   // 같은 값 끼리 짝을 짓고
//   const arr = [];
//   // 정렬을 하고
//   A.sort();
//   console.log(A);
//   // 다른 값들 기준으로 나누고
//   for (let i = 0; i < A.length - 1; i++) {
//     if (A[i] !== A[i + 1]) {
//       console.log(i);
//       // splice하고 나온 걸 바로 넣고
//       arr.push(A.splice(0, i + 1));
//       console.log(A);
//       i = -1;
//       // 원본 배열이 변형되므로 i = 0으로 초기화
//       // 마지막 요소가 1개 남으면 1개 푸쉬?
//     }
//     if (i === A.length - 2) {
//       arr.push(A);
//     }
//   }
//   let result = 0;
//   // 길이가 홀수인 배열 요소 리턴
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length % 2 === 1) {
//       result = arr[i][0];
//     }
//   }
//   // 남는 배열의 요소 반환
//   return result;
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const totalCounter = A.reduce((counter, num) => {
    // counter 객체에 해당 키가 있는지 판별하고 없으면 만들어주면서 개수 1
    // 있으면 +1
    counter[num] = counter[num] ? counter[num] + 1 : 1;
    return counter;
  }, {});

  for (let key in totalCounter) {
    if (totalCounter[key] % 2 !== 0) return Number(key);
  }
}
