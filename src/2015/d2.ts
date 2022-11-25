export function part1(length: number, width: number, height: number) {
  const present = 2 * length * width + 2 * width * height + 2 * height * length;
  const slack = Math.min(length * width, width * height, height * length);
  return present + slack;
}

export function part2(length: number, width: number, height: number) {
  const ribbon = Math.min(length + width, width + height, height + length) * 2;
  const bow = length * width * height;
  return ribbon + bow;
}
