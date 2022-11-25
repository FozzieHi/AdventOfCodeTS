import { part1, part2 } from "../../target/2015/d1/d1.js";

test("part1", () => {
  expect(part1("(())")).toBe(0);
  expect(part1("()()")).toBe(0);

  expect(part1("(((")).toBe(3);
  expect(part1("(()(()(")).toBe(3);
  expect(part1("))(((((")).toBe(3);

  expect(part1("())")).toBe(-1);
  expect(part1("))(")).toBe(-1);

  expect(part1(")))")).toBe(-3);
  expect(part1(")())())")).toBe(-3);
});

test("part2", () => {
  expect(part2(")")).toBe(1);
  expect(part2("()())")).toBe(5);
});
