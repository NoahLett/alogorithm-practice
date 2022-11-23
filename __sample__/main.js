
// Find the century of a given year //

function solution(year) {
  var divided = year / 100;
  if (divided < 1) {
    return 1;
  } else if (divided === 1) {
    return 1;
  } else if (Number.isInteger(divided) && divided > 1) {
    return divided;
  } else if (!Number.isInteger(divided) && divided > 1) {
    return Math.floor(divided) + 1;
  }
}

console.log(
  solution(1905),
  solution(1700),
  solution(1988),
  solution(2000),
  solution(8),
  solution(374));
