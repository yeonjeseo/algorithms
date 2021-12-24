function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  //moves 배열 값 -1씩
  let move = moves.map((idx) => {
    return (idx -= 1);
  });
  //상황 표현
  for (let j = 0; j < move.length; j++) {
    // 어떤 열을 탐색할지는 move 배열 요소가 결정
    for (let i = 0; i < board.length; i++) {
      // 골라서 바구니에 넣는 상황
      if (board[i][move[j]] !== 0) {
        //바구니에 해당 값을 넣고
        bucket.push(board[i][move[j]]);
        //골라낸 곳은 0으로
        board[i][move[j]] = 0;
        //바구니에 위아로 같은 놈이 담기면?
        if (
          bucket.length >= 2 &&
          bucket[bucket.length - 1] === bucket[bucket.length - 2]
        ) {
          //바구니에서 두 놈 꺼내고
          bucket.pop();
          bucket.pop();
          // 두개씩 터지니까 ++2
          answer += 2;
        }
        break;
      }
    }
  }
  return answer;
}
