/* 
python

n = 1
k = 2

def solution(n,k):
  glasses = []
  for i in range(1,n+1 if k>n else k+1):
    glasses.append(i)
  count = 0
  while k != 0 and glasses:
    if glasses[-1] <= k:
      k = k - glasses[-1]
      count += 1
      glasses.pop()
    else:
      glasses.pop()
  if k != 0 and not glasses:
    return -1
      
  return count

print(solution(n,k))
*/

// function solution(N, K) {
//   const glasses = [];

// }
function solution(N, K) {
  let last = K;
  let cnt = 0;
  for (let i = N; i > 0; i--) {
    if (i <= last && last - i >= 0) {
      last -= i;
      cnt++;
    }
    if (last === 0) {
      return cnt;
    }
  }
  return -1;
}
