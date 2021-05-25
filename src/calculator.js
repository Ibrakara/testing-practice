const calculator = (() => {
  const add = (number1, number2) => {
    return number1 + number2;
  };
  const sub = (number1, number2) => {
    const sub = number1 - number2;
    // Math.round((number1 - number2 + Number.EPSILON) * 100000) / 100000;
    return sub;
  };
  const mul = (number1, number2) => {
    return number1 * number2;
  };
  const div = (number1, number2) => {
    const div = number1 / number2;
    // Math.round((number1 / number2 + Number.EPSILON) * 1000000) / 1000000;

    return div;
  };
  return {
    add,
    sub,
    mul,
    div,
  };
})();

export default calculator;
