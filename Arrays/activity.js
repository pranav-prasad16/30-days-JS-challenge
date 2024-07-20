const arr = [1, 2, 3, 4, 5];

console.log('orignal array: ', arr);

console.log('First element of array is: ', arr[0]);
console.log('Last element of array is: ', arr[arr.length - 1]);

function operations(arr) {
  arr.push(6);
  console.log('Array after perfroming push operation: ', arr);

  arr.pop();
  console.log('Array after performing pop operation: ', arr);

  arr.shift();
  console.log('Array after performing shift operation: ', arr);

  arr.unshift(7);
  console.log('Array after performing unshift operation: ', arr);
}

function methods(arr) {
  const sqArr = arr.map((e) => e * e);
  console.log('Square of the array using map method: ', sqArr);

  const oddArr = arr.filter((e) => e % 2 != 0);
  console.log('Odd elements of the array using filter method: ', oddArr);

  const evenArr = arr.filter((e) => e % 2 === 0);
  console.log('Even elements of the array using filter method: ', evenArr);

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(
    'Sum of all the elements of the array using reduce method: ',
    sum
  );
}

function iteration(arr) {
  console.log('Elements of the array using for loop are: ');
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }

  console.log('Elements of the array using forEach loop are: ');
  arr.forEach((element, index) => {
    console.log(index, ': ', element);
  });
}

function creation() {
  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log('2D array is: ', arr2);
  console.log('Middle element of the 2D array is: ', arr2[1][1]);
  arr2[1][1] = 50;
  console.log('Middle element of the 2D array changed to 50');
  console.log('Modified array: ', arr2);
}

operations(arr);
methods(arr);
iteration(arr);
creation();
