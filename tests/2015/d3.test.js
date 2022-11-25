import { part1, part2 } from "../../target/2015/d3/d3.js";

test("part1", () => {
  expect(part1(">")).toBe(2);
  expect(part1("^>v<")).toBe(4);
  expect(part1("^v^v^v^v^v")).toBe(2);
});

test("part2", () => {
  expect(part2("^v")).toBe(3);
  expect(part2("^>v<")).toBe(3);
  expect(part2("^v^v^v^v^v")).toBe(11);
});
