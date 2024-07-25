import _ from 'lodash'; //importing all the methods from the lodash library
import axios from 'axios';
import {
  additionNum,
  subtractionNum,
  multiplicationNum,
  divisionNum,
} from './addScript.mjs';
import krishBiodata from './personObject.mjs'; // importing a default export so can keep any name
import allVariablesMethods from './customModule.mjs';
const { name, rollNo, address } = krishBiodata;

console.log('The result of addition is: ', additionNum(4, 3));

console.log('The result of subtraction is: ', subtractionNum(4, 3));

console.log('The result of multiplication is: ', multiplicationNum(4, 3));

try {
  console.log('The result of division is: ', divisionNum(4, 0));
} catch (error) {
  console.log('Error: ', error.message);
}
console.log(
  `The person is ${name} from ${address} and his roll no. is ${rollNo}`
);

console.log(allVariablesMethods.greeting());
console.log(allVariablesMethods.character());

const numbers = [1, 2, 3, 4, 5, 6];
const factorialNumbers = _.map(numbers, (num) => factorial(num));
console.log('Number array is: ', numbers);
console.log('Factorial of Number array is: ', factorialNumbers);

function factorial(num) {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      'https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10'
    );
    return response.data;
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

fetchProducts().then((prodouctsData) =>
  console.log(prodouctsData.data.products)
);
