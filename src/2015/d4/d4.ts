import crypto from "crypto";
import RE2 from "re2";

function findMatch(input: string, regex: RE2) {
  for (let i = 0; i < 10_000_000; i += 1) {
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
  return findMatch(input, new RE2(/^00000[a-z0-9]+$/));
}

export function part2(input: string) {
  return findMatch(input, new RE2(/^000000[a-z0-9]+$/));
}
