function evenOdd(num) {
  if (num % 2 == 0) console.log('even');
  else console.log('odd');
}

function square(num) {
  return num * num;
}

function maximum(a, b) {
  if (a > b) console.log(`${a} is greater than ${b}`);
  else console.log(`${b} is greater than ${a}`);
}

function addStrings(s1, s2) {
  return s1 + s2;
}

const sum = (a, b) => {
  return a + b;
};

const charExist = (str, ch) => {
  if (str.search(ch) == -1) return false;
  return true;
};

function product(x, y = 1) {
  return x * y;
}

function greeting(name, age = 21) {
  return `Greetings ${name} on making it to ${age}`;
}

function print() {
  console.log('print function called!');
}

function higherOrder(func, frequency) {
  while (frequency > 0) {
    func();
    frequency--;
  }
}

function f1() {
  for (let a = 0; a < 5; a++) {
    console.log(a);
  }
}

function f2() {
  for (let b = 0; b < 5; b++) {
    console.log(b);
  }
}

function higher(func1, func2, value) {
  let sq = value * value;
  while (value != 0) {
    func1();
    value--;
  }
  console.log('\n');
  while (sq != 0) {
    func2();
    sq--;
  }
}

maximum(12, 9);
console.log(charExist(addStrings('Hey', 'Pranav'), 'v'));
console.log(product(4));
console.log(greeting('roll no. 21'));
higher(f1, f2, 2);

function evenOddScript() {
  evenOdd(10);
}

function squareScript() {
  console.log(square(5));
}

function addStringsScript() {
  console.log(addStrings('Hey', 'Pranav'));
}

function sumScript() {
  console.log(sum(2, 5));
}

function higherOrderScript() {
  higherOrder(print, 5);
}

evenOddScript();
squareScript();
addStringsScript();
sumScript();
higherOrderScript();
