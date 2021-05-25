const capitalizeString = (string) => {
  const stringLength = string.length;
  let newString;
  string.length > 0
    ? (newString =
        string.slice(0, 1).toUpperCase() + string.slice(1, stringLength))
    : (newString = string);
  return newString;
};

export default capitalizeString;
