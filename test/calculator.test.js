import { expect, test } from "@jest/globals";
import calculator from "../src/calculator";

test("add with two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("add with decimals", () => {
  expect(calculator.add(2.888, 3.12223)).toBe(6.01023);
});

test("sub with first bigger second smaller numbers", () => {
  expect(calculator.sub(5, 3)).toBe(2);
});
test("sub with first smaller second bigger numbers", () => {
  expect(calculator.sub(3, 5)).toBe(-2);
});
test("sub with two zeros", () => {
  expect(calculator.sub(0, 0)).toBe(0);
});

test("sub two decimals", () => {
  expect(calculator.sub(2.888, 3.12223)).toBeCloseTo(-0.23423);
});
test("multply two numbers", () => {
  expect(calculator.mul(4, 2)).toBe(8);
});
test("multply by zero", () => {
  expect(calculator.mul(4, 0)).toBe(0);
});
test("multply two decimals", () => {
  expect(calculator.mul(4.3, 2.6)).toBe(11.18);
});
test("divide two decimals", () => {
  expect(calculator.div(4.3, 2.6)).toBeCloseTo(1.653846);
});
