const analyzeArray = (arr) => {
  const calculateAvg = () => {
    const avg =
      arr.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / arr.length;
    return avg;
  };
  const calculateMin = () => {
    const min = Math.min(...arr);
    return min;
  };
  const calculateMax = () => {
    const max = Math.max(...arr);
    return max;
  };
  const calculateLen = () => {
    const len = arr.length;
    return len;
  };
  const obj = {
    average: calculateAvg(),
    min: calculateMin(),
    max: calculateMax(),
    length: calculateLen(),
  };
  return obj;
};
export default analyzeArray;
