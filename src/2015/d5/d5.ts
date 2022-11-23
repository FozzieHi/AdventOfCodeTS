import RE2 from "re2";

function double(input: string) {
  const array = [...input];
  let prevChar = array[0];
  array.shift();
  return array.some((char) => {
    if (prevChar === char) {
      return true;
    }
    prevChar = char;
    return false;
  });
}

function doublePairs(input: string) {
  const array = [...input];
  let prevChar = array[0];
  array.shift();
  return array.some((char, index) => {
    const pair = prevChar + char;
    prevChar = char;
    return array
      .slice(index + 1)
      .join("")
      .includes(pair);
  });
}

function doubleGap(input: string) {
  const array = [...input];
  let prevPrevChar = array[0];
  let prevChar = array[1];
  array.shift();
  array.shift();
  return array.some((char) => {
    if (prevPrevChar === char) {
      return true;
    }
    prevPrevChar = prevChar;
    prevChar = char;
    return false;
  });
}

export function part1(input: string) {
  const vowels = new RE2(/[aeiou][a-z]*[aeiou][a-z]*[aeiou][a-z]*/);
  const disallowed = new RE2(/ab|cd|pq|xy/);
  return vowels.test(input) && double(input) && !disallowed.test(input);
}

export function part2(input: string) {
  return doublePairs(input) && doubleGap(input);
}
