import { part1, part2 } from "../../../target/2015/d2/d2.js";

test("part1", () => {
  expect(part1(2, 3, 4)).toBe(58);
  expect(part1(1, 1, 10)).toBe(43);
});

test("part2", () => {
  expect(part2(2, 3, 4)).toBe(34);
  expect(part2(1, 1, 10)).toBe(14);
});
