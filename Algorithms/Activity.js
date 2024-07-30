function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}

function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let partition = quickSortHelper(array, low, high);
    quickSort(array, low, partition - 1);
    quickSort(array, partition + 1, high);
  }
}

function quickSortHelper(array, low, high) {
  let pivot = array[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (array[i] <= pivot && i <= high - 1) i++;
    while (array[j] > pivot && j >= low + 1) j--;
    if (i < j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let temp = array[low];
  array[low] = array[j];
  array[j] = temp;
  return j;
}

function linearSearch(array, key) {
  for (let index = 0; index < array.length; index++) {
    if (key === array[index]) return index;
  }
  return -1;
}

function binarySearch(array, key, low = 0, high = array.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((high + low) / 2);
  if (array[mid] === key) return mid;
  else if (array[mid] > key) return binarySearch(array, key, low, mid - 1);
  else return binarySearch(array, key, mid + 1, high);
}

function countOccurence(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) count++;
  }
  return count;
}

function lengthOfSubstring(str) {
  let length = 0;
  let substrr = '';
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (substrr.includes(str[i])) return { length, substrr };
    substrr += str[i];
    length += 1;
  }
  return { length, substrr };
}

function rotateArray(arr, pos) {
  pos = pos % arr.length;
  for (let i = 0; i < pos; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
}

function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const arr3 = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i]);
      i = i + 1;
    } else {
      arr3.push(arr2[j]);
      j = j + 1;
    }
  }
  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i = i + 1;
  }
  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j = j + 1;
  }
  return arr3;
}

const list1 = [4, 2, 9, 1, 3];
const list2 = [40, 21, 59, 16, 38];
const list3 = [7, 1, 19, 89, 17, 0, 2];
const list4 = [0, 1, 2, 7, 17, 19, 89];
const str = 'Deadpool and Wolverine';
const ch = 'o';
const key = 7;
const pos = 3;
bubbleSort(list1);
selectionSort(list2);
quickSort(list3);
const countOccurenceResult = countOccurence(str, ch);
const { length, substrr } = lengthOfSubstring(str);
const linearSearchResultIndex = linearSearch(list3, key);
const binarySearchResultIndex = binarySearch(list3, key);
rotateArray(list4, pos);
const mergeArraysResult = mergeArrays(list1, list2);
console.log(`Bubble sort result is : [${list1}]`);
console.log(`Selection sort result is : [${list2}]`);
console.log(`Quick sort result is : [${list3}]`);
if (linearSearchResultIndex === -1)
  console.log(
    `The key ${key} is not found in the array [${list3}] via linear search`
  );
else
  console.log(
    `The key ${key} is at the index ${linearSearchResultIndex} of the array [${list3}] via linear search`
  );
if (binarySearchResultIndex === -1)
  console.log(
    `The key ${key} is not found in the array [${list3}] via binary search`
  );
else
  console.log(
    `The key ${key} is at the index ${binarySearchResultIndex} of the array [${list3}] via binary search`
  );
console.log(`The merged array of list1 and list2 is : [${mergeArraysResult}]`);
console.log(`The list 3 rotated by ${pos} positions is: [${list4}]`);
console.log(
  `The character '${ch}' appears ${countOccurenceResult} in the string '${str}'`
);
console.log(
  `The length of the longest substring in the string '${str}' before characters start repeating is : ${length} and the substring is : ${substrr}`
);
