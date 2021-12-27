function solution(s) {
  let pCnt = 0,
    yCnt = 0;
  const arr = s.split("");
  arr.forEach((char) => {
    if (char === "p" || char === "P") pCnt++;
    if (char === "y" || char === "Y") yCnt++;
  });

  return pCnt === yCnt ? true : false;
}
