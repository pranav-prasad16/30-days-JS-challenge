function templateLiterals() {
  const name = 'Pintu Don';
  const age = 10;
  const gun = 'Asla hmm bhi lkar chalte hai phlwan🔫 🔫 🔫 🔫 ';
  const fire = 'ye le 🔥🔥🔥🔥🔥 thunder bolt bhi le ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️';
  const intro = `${name} has turned ${age} recently`;
  console.log(intro);

  const warning = `Hello, this is ${name}, heard you are making trouble in our area.
  Don't forget that ${gun}
  ${fire}`;

  console.log(warning);
}

const arr = [1, 2, 3, 4, 5];
const obj = { fruit: 'apple', vegetable: 'potato', protein: 'egg' };
function arrObjDestructuring(arr, obj) {
  console.log('Array is: ', arr);
  const [first, second] = arr;
  console.log('Array first 2 elements are: ', first, ',', second);

  const { fruit, vegetable, protein } = obj;
  console.log('Object after destructing: ', fruit, vegetable, protein);
}

function spreadRest() {
  const arr2 = [...arr, 6, 7, 8, 9, 10];
  console.log('Array 2 made using array 1 using spread operator: ', arr2);

  function sum(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
  }

  console.log(
    'Sum of varriable no. of arguments using rest parameter: ',
    sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  );
}

function defaultParameter() {
  function product(num1, num2 = 10) {
    return num1 * num2;
  }

  console.log(
    'Product of two numbers where one is default to be 10: ',
    product(10)
  );
}

function enhancedObjLiterals() {
  function createObject(name, age, location) {
    return {
      name,
      age,
      location,
      info() {
        return `${name} of ${age} lives in ${location}`;
      },
    };
  }

  const newObj = new createObject('Pranav', 21, 'Kolkata');
  console.log('Object created using enhanced object literals is: ', newObj);
  console.log(
    'Method of above object using enhanced object literals is: ',
    newObj.info()
  );
}

templateLiterals();
arrObjDestructuring(arr, obj);
spreadRest();
defaultParameter();
enhancedObjLiterals();
