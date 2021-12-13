// numbers 문자열을 split()으로 쪼개 배열(splitArr)로 만든다.
// 순열을 사용해 가능한 모든 경우의 수를 구한다.(getPermutations()) 순열을 사용하는 이유는 0과 1을 뽑는 것과 1과 0을 뽑는 것은 다르기 때문이다. (numbers의 숫자가 "011"이라면 이중에서 1개, 2개, 3개를 뽑아 조합가능한 모든 경우를 구한다.)
// 조합가능한 경우(ex.["0", "1"])를 join()으로 이어붙이고("01") 숫자로 바꾼다.(1이됨) 이를 배열(candiArr)에 추가한다.
// 조합가능한 경우가 담긴 배열(candiArr)을 Set(candiSet)으로 만들어 중복을 제거한다.
// Set(candiSet)에서 하나씩 꺼내며 소수인지 검사하고 소수인 경우 answer값을 증가시킨다.

const inputs = ["011", "17"];

function solution(numbers) {
  const splitArr = numbers.split("");
  console.log(splitArr);
}

solution(inputs[0]);
