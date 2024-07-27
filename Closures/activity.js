function outer(num) {
  function inner() {
    return num * num;
  }
  return inner;
}

const num = 6;
const square = outer(num);
console.log(`Square of ${num} is: ${square()}`);

function createCount() {
  let count = 0;
  function incrementCount() {
    count++;
  }
  function decrementCount() {
    count--;
  }
  function getCount() {
    return count;
  }
  return { incrementCount, decrementCount, getCount };
}

const counter = createCount();
console.log(counter.getCount());
counter.incrementCount();
console.log(counter.getCount());
counter.incrementCount();
console.log(counter.getCount());
counter.decrementCount();
console.log(counter.getCount());
counter.decrementCount();
console.log(counter.getCount());

const uniqueIDGenerator = (numbers) => {
  const uuidLength = 5;
  let uuid = '';
  for (let index = 0; index < uuidLength; index++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    uuid += numbers[randomIndex];
  }
  const incrementUUID = () => {
    return uuid++;
  };
  const getUUID = () => {
    return uuid;
  };
  return { incrementUUID, getUUID };
};

const numbers = '123456789';
const uniqueID = uniqueIDGenerator(numbers);
console.log('Unique ID is:', uniqueID.getUUID());
uniqueID.incrementUUID();
console.log('Incremented unique ID is:', uniqueID.getUUID());

const greetUser = (name) => {
  const greetings = () => {
    return `Hey! there ${name} hope you have a good day`;
  };
  return greetings;
};

const greetMessage = greetUser('Hero');
console.log(greetMessage());

const arr = [];
for (let index = 0; index < 5; index++) {
  arr.push(
    (function (i) {
      return function logIndex() {
        console.log('This function is stored at the index:', i, 'of the array');
      };
    })(index)
  );
}

console.log(arr);
arr[1]();

const list = ['banana', 'oats', 'milk', 'honey', 'chia seeds', 'coco powder'];
function manageBreakfast(recipe) {
  function addItems(item) {
    recipe.push(item);
    console.log(`Added the ingredient: ${item} in the recipe`);
  }
  function removeItems(item) {
    const indexToRemove = recipe.indexOf(item);
    if (indexToRemove != -1) recipe.splice(indexToRemove, 1);
    console.log(`Removed the ingredient: ${item} from the recipe`);
  }
  function displayItems() {
    console.log('The ingredients for overnight oats recipe are: ');
    recipe.forEach((element) => {
      console.log(element);
    });
  }
  return { addItems, removeItems, displayItems };
}

const breakfast = manageBreakfast(list);
breakfast.displayItems();
breakfast.addItems('peanut butter');
breakfast.displayItems();
breakfast.addItems('sugar');
breakfast.addItems('protein powder');
breakfast.displayItems();
breakfast.removeItems('sugar');
breakfast.displayItems();

function memorize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// function factorial(num) {
//   let result = 1;
//   while (num > 1) {
//     result *= num;
//     num--;
//   }
//   return result;
// }

function factorial(num, cache = new Map()) {
  if (num <= 1) return 1;
  if (cache.has(num)) return cache.get(num);

  const result = num * factorial(num - 1, cache);
  cache.set(num, result);
  return result;
}

const memorizedFactorial = memorize(factorial);

console.log('Factorial of 5 is: ', memorizedFactorial(5));
console.log('Factorial of 6 is: ', memorizedFactorial(6));
console.log(
  'Factorial of 5 is but this time stored in cache: ',
  memorizedFactorial(5)
);
