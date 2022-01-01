/* 
  ㅇ
*/
function solution(a) {
  let cnt = 0;
  const aObject = a.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  // console.log(aObject)

  for (let i in aObject) {
    if (i < aObject[i]) {
      cnt += aObject[i] - i;
    } else {
      if (Number(i) / 2 > aObject[i]) {
        cnt += aObject[i];
      } else {
        cnt += i - aObject[i];
      }
    }
  }
  return cnt;
}
