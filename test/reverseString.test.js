import { expect, test } from "@jest/globals";
import reverseString from "../src/reverseString";

test("standard string", () => {
  expect(reverseString("test")).toBe("tset");
});
test("multiple words", () => {
  expect(reverseString("This one is tested")).toBe("detset si eno sihT");
});
test("empty string", () => {
  expect(reverseString("")).toBe("");
});
test("string with punctuation", () => {
  expect(reverseString(", This one is tested!!!")).toBe(
    "!!!detset si eno sihT ,"
  );
});
test("space at the beginning", () => {
  expect(reverseString(" This one is tested")).toBe("detset si eno sihT ");
});
test("space at end", () => {
  expect(reverseString("This one is tested ")).toBe(" detset si eno sihT");
});
test("numbers", () => {
  expect(reverseString("123456789")).toBe("987654321");
});
