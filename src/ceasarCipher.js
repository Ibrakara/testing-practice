const ceasarCipher = (msg, key) => {
  const stringArray = msg.split("");
  let chipheredCharCode, rangeCheck, newLetter;
  let normalizedKey = key % 25;
  const lowerCaseStartingCharCode = 97;
  const lowerCaseEndingCharCode = 122;
  const upperCaseStartingCharCode = 65;
  const upperCaseEndingCharCode = 90;

  const shiftLowerCase = (letterCharCode, rangeCheck) => {
    if (rangeCheck > lowerCaseEndingCharCode) {
      chipheredCharCode =
        ((letterCharCode + normalizedKey) % (lowerCaseEndingCharCode + 1)) +
        lowerCaseStartingCharCode;
    } else {
      chipheredCharCode = letterCharCode + normalizedKey;
    }
    newLetter = String.fromCharCode(chipheredCharCode);
    return newLetter;
  };
  const shiftUpperCase = (letterCharCode, rangeCheck) => {
    if (rangeCheck > upperCaseEndingCharCode) {
      chipheredCharCode =
        ((letterCharCode + normalizedKey) % (upperCaseEndingCharCode + 1)) +
        upperCaseStartingCharCode;
    } else {
      chipheredCharCode = letterCharCode + normalizedKey;
    }
    newLetter = String.fromCharCode(chipheredCharCode);
    return newLetter;
  };
  let cipheredStr = stringArray
    .map((letter) => {
      const spaceCharCode = 32;
      let letterCharCode = letter.charCodeAt(0);
      rangeCheck = letterCharCode + normalizedKey;

      if (
        letterCharCode >= upperCaseStartingCharCode &&
        letterCharCode <= upperCaseEndingCharCode
      ) {
        newLetter = shiftUpperCase(letterCharCode, rangeCheck);
        return newLetter;
      } else if (
        letterCharCode >= lowerCaseStartingCharCode &&
        letterCharCode <= lowerCaseEndingCharCode
      ) {
        newLetter = shiftLowerCase(letterCharCode, rangeCheck);
        return newLetter;
      } else if (letterCharCode == spaceCharCode) {
        return letter;
      } else {
        return letter;
      }
    })
    .join("");
  return cipheredStr;
};
export default ceasarCipher;
