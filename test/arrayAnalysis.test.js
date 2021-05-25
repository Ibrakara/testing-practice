import { expect, test } from "@jest/globals";
import analyzeArray from "../src/arrayAnalysis";

test("diffrent elements", () => {
  const object = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(object);
});
test("same elements of array", () => {
  const object = {
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  };
  expect(analyzeArray([1, 1, 1, 1, 1])).toEqual(object);
});
test("all zeros", () => {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 6,
  };
  expect(analyzeArray([0, 0, 0, 0, 0, 0])).toEqual(object);
});
