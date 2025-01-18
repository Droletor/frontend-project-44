const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomOperator = () => ['+', '-', '*'][randomRange(0, 3)];
const randomArithmeticProgression = (start = 0, length = 10, increment = 1) => {
  const array = [];
  for (let i = start; i < start + length; i += 1) array.push(i * increment);
  return array;
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const arrayToString = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i += 1) {
    str = `${str} ${array[i]}`;
  }

  return str.trim();
};

const firstTwentyFivePrimeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

export {
  randomRange,
  randomOperator,
  randomArithmeticProgression,
  gcd,
  arrayToString,
  firstTwentyFivePrimeNumber,
};
