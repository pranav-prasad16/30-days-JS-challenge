const a = 5;
const b = 2;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;
function arithmeticOperations(a, b) {
  console.log('/////Arithmetic Operations');
  console.log(`Sum of ${a} and ${b} is: ${sum}`);
  console.log(`Difference of ${a} and ${b} is: ${difference}`);
  console.log(`Product of ${a} and ${b} is: ${product}`);
  console.log(`Quotient of ${a} divided by ${b} is: ${quotient}`);
  console.log(`Remainder of ${a} divided ${b} is: ${remainder}`);
}

let num = 20;
console.log('Result of num += 1 for num = 20 is: ', (num += 1));
console.log('Result of num -= 1 for num = 21 is: ', (num -= 1));

const l = 10;
const m = 10;

function logicalOperators(i, j) {
  console.log('/////Logical Operations');
  if (i > j) {
    console.log(true);
  } else console.log(false);

  if (i < j) {
    console.log(true);
  } else console.log(false);

  if (i >= j) {
    console.log(true);
  } else console.log(false);

  if (i <= j) {
    console.log(true);
  } else console.log(false);

  if (i == j) {
    console.log(true);
  } else console.log(false);

  if (i === j) {
    console.log(true);
  } else console.log(false);

  if (i >= j && i <= j) console.log(true);
  else console.log(false);

  if (i > j || i <= j) console.log(true);
  else console.log(false);

  if (!(i > j)) console.log(false);
  else console.log(true);
}

function numberCheck(x) {
  console.log('/////Ternary Operator');
  const y =
    x > 0 ? console.log('Positive number') : console.log('Negative Value');
}

const x = 20;

arithmeticOperations(a, b);
logicalOperators(l, m);
numberCheck(x);
