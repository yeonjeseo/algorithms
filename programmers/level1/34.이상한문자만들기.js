function solution(s) {
  const words = s.split(" ");
  const result = words.map((word) => changeCase(word));
  return result.join(" ");
}

function changeCase(word) {
  let changed = "";
  for (let i = 0; i < word.length; i++) {
    changed += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
  }
  return changed;
}
