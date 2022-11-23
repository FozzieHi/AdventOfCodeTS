import crypto from "crypto";

function findMatch(input: string, regex: RegExp) {
  for (let i = 0; i < 10000000; i += 1) {
    const hash = crypto
      .createHash("md5")
      .update(input + i.toString())
      .digest("hex");
    if (regex.test(hash)) {
      return i;
    }
  }
  return null;
}

export function part1(input: string) {
  return findMatch(input, /^00000[a-z0-9]+$/);
}

export function part2(input: string) {
  return findMatch(input, /^000000[a-z0-9]+$/);
}
