import { expect, test } from "@jest/globals";
import capitalizeString from "../src/capitalizeString";
test("capitalize a string", () => {
  expect(capitalizeString("string")).toBe("String");
});
test("string with no letters", () => {
  expect(capitalizeString("")).toBe("");
});
test("some camel case string", () => {
  expect(capitalizeString("heRe I COmE")).toBe("HeRe I COmE");
});
test("numbers as a first letter", () => {
  expect(capitalizeString("1st day of my new life.")).toBe(
    "1st day of my new life."
  );
});
test("punctuation as a first letter", () => {
  expect(capitalizeString(",and this was a dreadfull period of my life")).toBe(
    ",and this was a dreadfull period of my life"
  );
});
test("uppercase as a first letter", () => {
  expect(capitalizeString("And this was a dreadfull period of my life")).toBe(
    "And this was a dreadfull period of my life"
  );
});
