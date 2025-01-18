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

export {
  randomRange,
  randomOperator,
  randomArithmeticProgression,
  gcd,
  arrayToString,
};
