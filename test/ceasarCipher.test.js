import { expect, test } from "@jest/globals";
import ceasarCipher from "../src/ceasarCipher";

test("lowercase letters", () => {
  expect(ceasarCipher("abcxyz", 11)).toBe("lmnijk");
});
test("uppercase letters", () => {
  expect(ceasarCipher("ABCXYZ", 11)).toBe("LMNIJK");
});
test("full uppercase sentence", () => {
  expect(ceasarCipher("ATTACK THE FIRST WALL", 11)).toBe(
    "LEELNV ESP QTCDE HLWW"
  );
});

test("camel case  sentence", () => {
  expect(ceasarCipher("aTtAcK tHe fiRsT WAlL", 18)).toBe(
    "sLlSuC lZw xaJkL OSdD"
  );
});
test("sentence with punctuations", () => {
  expect(
    ceasarCipher(
      "Soldiers, I'm not ordering you to attack. I'm ordering you to die!!!    M.Kemal Ataturk - Founder of Republic of Turkey",
      23
    )
  ).toBe(
    "Pliafbop, F'j klq loabofkd vlr ql xqqxzh. F'j loabofkd vlr ql afb!!!    J.Hbjxi Xqxqroh - Clrkabo lc Obmryifz lc Qrohbv"
  );
});
