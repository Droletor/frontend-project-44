const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomOperator = () => ['+', '-', '*'][randomRange(0, 3)];

export { randomRange, randomOperator };