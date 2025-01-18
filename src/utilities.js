const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomOperator = () => ['+', '-', '*'][randomRange(0, 3)];
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  
  return gcd(b, a % b);
}

export { randomRange, randomOperator, gcd };