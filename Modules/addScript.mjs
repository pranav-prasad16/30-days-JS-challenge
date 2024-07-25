export const additionNum = (num1, num2) => {
  return num1 + num2;
};

export const subtractionNum = (num1, num2) => {
  return num1 - num2;
};

export const multiplicationNum = (num1, num2) => {
  return num1 * num2;
};

export const divisionNum = (num1, num2) => {
  if (num2 === 0) throw new Error('The denominator is 0');
  return num1 / num2;
};
