import { part1, part2 } from "../../../target/2015/d5/d5.js";

test("part1", () => {
  expect(part1("ugknbfddgicrmopn")).toBe(true);
  expect(part1("aaa")).toBe(true);
  expect(part1("jchzalrnumimnmhp")).toBe(false);
  expect(part1("haegwjzuvuyypxyu")).toBe(false);
  expect(part1("dvszwmarrgswjxmb")).toBe(false);
});

test("part2", () => {
  expect(part2("qjhvhtzxzqqjkmpb")).toBe(true);
  expect(part2("xxyxx")).toBe(true);
  expect(part2("uurcxstgmygtbstg")).toBe(false);
  expect(part2("ieodomkazucvgmuy")).toBe(false);
});
