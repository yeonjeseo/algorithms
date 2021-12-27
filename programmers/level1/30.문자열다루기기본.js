function solution(s) {
  if (s.length < 1 || s.length > 8) return false;
  if (s.length == 4 || s.length == 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) return false;
    }
    return true;
  }
  return false;
}
