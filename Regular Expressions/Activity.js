function regexWord(str) {
  let regex = /JavaScript/g;
  let matches = str.match(regex);
  let count = 0;

  if (matches) {
    matches.forEach((match) => {
      // console.log(match);
      count += 1;
    });
  } else {
    console.log('No matches found');
  }
  if (count)
    console.log(
      `The count of the word 'Javascript' is : ${count} in the string : '${str}'`
    );
}

function regexDigit(str) {
  let regex = /\d+/g;
  let matches = str.match(regex);
  let count = 0;
  let digitStr = '';

  if (matches) {
    matches.forEach((match) => {
      // console.log(match);
      count += 1;
      digitStr += match + ', ';
    });
  } else {
    console.log('No matches found');
  }
  if (count)
    console.log(
      `The count of digits in the string : '${str}' is : ${count} and the digits are '${digitStr}'`
    );
}

function regextCapitalLetter(str) {
  const regex = /[A-Z]/g;
  const matches = str.match(regex);
  let count = 0;
  let capitalLetterStr = '';

  if (matches) {
    matches.forEach((match) => {
      count += 1;
      capitalLetterStr += match;
    });
  } else console.log('No matches found');
  if (count)
    console.log(
      `The capital letter in the string : '${str}' are : '${capitalLetterStr}' and its count is : ${count}`
    );
}

const wordString =
  'JavaScript is a programming language. Many people love JavaScript.';
const digitsString =
  '1234567890 is a number which has 1, 2, 3, 4, 5, 6, 7, 8, 9, 0';
const capitalLetterString = 'A Bird is sitting On a Tree branch';

regexWord(wordString);
regexDigit(digitsString);
regextCapitalLetter(capitalLetterString);
