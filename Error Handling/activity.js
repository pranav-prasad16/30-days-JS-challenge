const errorURLFetch = () => {
  fetch('https://api.freeapi.app/api/v1/public/randomusers/user/ra')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.data.name);
    })
    .catch((error) => {
      console.log('Error: ', error.message);
    });
};

errorURLFetch();

class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Error due to denominator being 0';
    this.stack = 'Denominator 0';
  }
}

const divideNum = (a, b) => {
  let divideResult;

  try {
    if (b === 0) {
      throw new DivideByZeroError('The denominator is zero');
    } else {
      divideResult = a / b;
      console.log(`Quotient for division of ${a} and ${b} is:`, divideResult);
    }
  } catch (error) {
    if (error instanceof DivideByZeroError) {
      console.log('Error name: ', error.name);
      console.log('Error message: ', error.message);
      console.log('Error stack: ', error.stack);
    } else console.log('Error: ', error.message);
  }
};

divideNum(3, 0);

const allBlocks = () => {
  try {
    console.log(
      'This is the try block randomVariable not declared till now but trying to log it'
    );
    console.log(randomVariable);
  } catch (error) {
    console.log('This is the catch block also Error: ', error.message);
  } finally {
    const randomVariable = 4;
    console.log(
      'This is the finally block also randomVariable is now declared and is: ',
      randomVariable
    );
  }
};

allBlocks();

class ValidateStringError extends Error {
  constructor(message) {
    super(message);
    this.name = 'String empty error';
    this.stack = 'empty';
  }
}
const validateString = (str) => {
  try {
    if (!str.length) {
      throw new ValidateStringError('String is empty');
    } else console.log('String is: ', str);
  } catch (error) {
    if (error instanceof ValidateStringError) {
      console.log('Error name: ', error.name);
      console.log('Error message: ', error.message);
      console.log('Error stack: ', error.stack);
    } else console.log('Error: ', error.message);
  }
};

validateString(``);

const resolveRejectPromise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 1) resolve('This is resolved as random number is 1');
  else reject('Can not resolve as random number is 0');
});

resolveRejectPromise
  .then((message) => console.log('Success:', message))
  .catch((error) => console.log('Error: ', error));

const resolveRejectAsyncAwait = (randomNum) => {
  try {
    if (randomNum === 1) {
      console.log('Resolved via try block as random number is 1');
    } else throw new Error('Rejected via catch block as random number is 0');
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

const randomNum = Math.floor(Math.random() * 2);
resolveRejectAsyncAwait(randomNum);

const errorURLFetchAsyncAwait = async () => {
  try {
    const response = await fetch(
      'https://api.freeapi.app/api/v1/public/randomusers/user/ran'
    );
    const json = await response.json();
    console.log(json.data.name);
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

errorURLFetchAsyncAwait();
