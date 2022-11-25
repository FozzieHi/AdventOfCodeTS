import { part1, part2 } from "../../target/2015/d4/d4.js";

test("part1", () => {
  expect(part1("abcdef")).toBe(609043);
  expect(part1("pqrstuv")).toBe(1048970);
});

test("part2", () => {
  expect(part2("abcdef")).toBe(6742839);
  expect(part2("pqrstuv")).toBe(5714438);
});
