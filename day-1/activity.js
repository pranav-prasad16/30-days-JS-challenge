var a = 12;
console.log('value of a is: ', a);

let b = 'Hello world!';
console.log('value of b is: ', b);
b = 'Hello Pranav';
console.log('value of b is: ', b);

const c = true;
console.log('value of c is: ', c);

const d = [1, 2, 3, 4, 5];
const e = { fruit: 'banana', vegetable: 'potato', arr: [6, 7, 8, 9, 10] };
const f = () => {
  console.log('Function here!');
};
const g = Symbol('uniqueSymbol');
const h = 123n;
const i = null;
let j;

console.log('Type of the varriable a is: ', typeof a);
console.log('Type of the varriable b is: ', typeof b);
console.log('Type of the varriable c is: ', typeof c);
console.log('Type of the varriable d is: ', typeof d);
console.log('Type of the varriable e is: ', typeof e);
console.log('Type of the varriable f is: ', typeof f);
console.log('Type of the varriable g is: ', typeof g);
console.log('Type of the varriable h is: ', typeof h);
console.log('Type of the varriable i is: ', typeof i);
console.log('Type of the varriable j is: ', typeof j);

const x = true;
let y = true;
console.log('Value of x and y are: ', x, y);
const changeValue = () => {
  try {
    y = false;
    x = false;
  } catch (error) {
    console.log('Error is: ', error.message);
  }
};

changeValue();

console.log('Value of x and y are: ', x, y);
