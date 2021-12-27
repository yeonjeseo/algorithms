function solution(n) {
  let str = ["수", "박"];
  let ans = "";

  for (let i = 0; i < n; i++) {
    ans += str[i % 2];
  }
  return ans;
}
