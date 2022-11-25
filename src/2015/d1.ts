export function part1(input: string) {
  let floor = 0;
  [...input].forEach((char) => {
    if (char === "(") {
      floor += 1;
    } else if (char === ")") {
      floor -= 1;
    }
  });
  return floor;
}

export function part2(input: string) {
  let floor = 0;
  let position = -1;
  [...input].some((char, index) => {
    if (char === "(") {
      floor += 1;
    } else if (char === ")") {
      floor -= 1;
    }

    if (floor < 0) {
      position = index + 1;
      return true;
    }
    return false;
  });
  return position;
}
