function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function fibonacci(num) {
  if (num === 0 || num === 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function sumAllElements(arr, index = 0) {
  if (index === arr.length - 1) return arr[arr.length - 1];
  let sum = arr[index] + sumAllElements(arr, index + 1);
  return sum;
}

function maxElement(arr, maxi = -Infinity, index = 0) {
  if (index === arr.length) return maxi;
  maxi = Math.max(maxi, arr[index]);
  return maxElement(arr, maxi, index + 1);
}

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

function checkPallindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) return checkPallindrome(str.slice(1, -1));
  else return false;
}

function binarySearch(arr, key, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) return mid;
  else if (arr[mid] > key) return binarySearch(arr, key, low, mid - 1);
  else return binarySearch(arr, key, mid + 1, high);
}

function countOccurence(arr, target, index = 0) {
  if (index === arr.length) return 0;
  let count = arr[index] === target ? 1 : 0;
  return count + countOccurence(arr, target, index + 1);
}

const num = 5;
const list = [1, 2, 3, 4, 5];
const list1 = [20, 36, 59, 70, 81, 98, 108];
const list2 = [7, 0, 2, 4, 3, 4, 8, 7, 0, 1, 2, 3, 8];
const key1 = 81;
const key2 = 7;
const str = 'Hello World';
const str2 = 'helleh';
const factorialResult = factorial(num);
const fibonacciResult = fibonacci(num);
const sumAllElementsResult = sumAllElements(list);
const maxElementResult = maxElement(list);
const reverseStringResult = reverseString(str);
const checkPallindromeResult = checkPallindrome(str2);
const binarySearchResult = binarySearch(list1, key1);
const countOccurenceResult = countOccurence(list2, key2);
console.log(`The factorial of ${num} is: ${factorialResult}`);
console.log(`The fibonacci number at ${num} is: ${fibonacciResult}`);
console.log(
  `The sum of the elements of the list [${list}] is: ${sumAllElementsResult}`
);
console.log(`The max element in the list [${list}] is: ${maxElementResult}`);
console.log(`The reverse of the string ${str} is: ${reverseStringResult}`);
console.log(
  `The pallindrome result for the string ${str2} is: ${checkPallindromeResult}`
);
if (binarySearchResult === -1)
  console.log(`The element ${key1} is not found in the list [${list1}]`);
else
  console.log(
    `The element ${key1} is found at the index ${binarySearchResult} of the list [${list1}]`
  );
console.log(countOccurenceResult);
