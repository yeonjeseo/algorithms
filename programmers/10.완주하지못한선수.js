function solution(participant, completion) {
  //동명이인이 있을 경우 생각할 것
  //completion 기준으로 participant를 검색해서 빈 문자열로 치환
  // 남는 놈이 범인 -> join("")하기
  // 효율성 실패 뜸
  // completion.forEach(finished => {
  //     participant[participant.indexOf(finished)] = "";
  // })
  // // ["", "", "leo", ""]
  // return participant.join("");

  // 정렬 후에 다른 놈 골라내기
  // 성공
  participant.sort();
  completion.sort();

  // let result = "";
  // participant.some((person, index) => {
  //     if(조건에 걸리면) {
  //         result = 배열값;
  //         return false;
  //     }
  // })

  // 효율 높이기
  const result = participant.filter(
    (person, index) => person !== completion[index]
  );
  return result[0];
}
