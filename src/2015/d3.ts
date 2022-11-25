function changeDirection(input: string, currentPosition: Array<number>) {
  let [newX, newY] = currentPosition;
  switch (input) {
    case "^":
      newY += 1;
      break;
    case "v":
      newY -= 1;
      break;
    case ">":
      newX += 1;
      break;
    case "<":
      newX -= 1;
      break;
    default:
      break;
  }
  return [newX, newY];
}

export function part1(input: string) {
  let currentPosition = [0, 0];
  const visitedPositions: Array<Array<number>> = [[0, 0]];

  [...input].forEach((char) => {
    const newPosition = changeDirection(char, currentPosition);
    if (
      !visitedPositions.some((visited) =>
        newPosition.every((position, index) => visited[index] === position)
      )
    ) {
      visitedPositions.push(newPosition);
    }
    currentPosition = newPosition;
  });
  return visitedPositions.length;
}

export function part2(input: string) {
  let santaCurrentPosition = [0, 0];
  let roboSantaCurrentPosition = [0, 0];
  const visitedPositions: Array<Array<number>> = [[0, 0]];

  let turn = "santa";
  [...input].forEach((char) => {
    const currentPosition =
      turn === "santa" ? santaCurrentPosition : roboSantaCurrentPosition;
    const newPosition = changeDirection(char, currentPosition);
    if (
      !visitedPositions.some((visited) =>
        newPosition.every((position, index) => visited[index] === position)
      )
    ) {
      visitedPositions.push(newPosition);
    }
    if (turn === "santa") {
      santaCurrentPosition = newPosition;
      turn = "roboSanta";
    } else {
      roboSantaCurrentPosition = newPosition;
      turn = "santa";
    }
  });
  return visitedPositions.length;
}
