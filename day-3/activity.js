const num = 10;

function checkNumberSign(num) {
  if (num >= 0) console.log(`${num} is positive`);
  else console.log(`${num} is negative`);
}

const age = 18;

function checkAge(age) {
  if (age >= 18) console.log('Can vote');
  else console.log('Cannot vote');
}

const a = 3;
const b = 10;
const c = 0;

function checkLargestNumber(a, b, c) {
  if (a > b) {
    if (a > c) console.log(`${a} is the largest number`);
    else console.log(`${c} is the largest number`);
  } else if (b > a) {
    if (b > c) console.log(`${b} is the largest number`);
    else console.log(`${c} is the largest number`);
  }
}

day = 4;

function checkDay(day) {
  switch (day) {
    case 1:
      console.log('Its monday today');
      break;
    case 2:
      console.log('Its tuesday today');
      break;
    case 3:
      console.log('Its wednesday today');
      break;
    case 4:
      console.log('Its thursday today');
      break;
    case 5:
      console.log('Its friday today');
      break;
    case 6:
      console.log('Its saturday today');
      break;
    case 7:
      console.log('Its sunday today');
      break;
    default:
      console.log('Enter a day of the week');
      break;
  }
}

const cgpa = 10;

function checkGrade(cgpa) {
  switch (cgpa) {
    case 10:
      console.log('Your gade is: A');
      break;
    case 9:
      console.log('Your gade is: B');
      break;
    case 8:
      console.log('Your gade is: C');
      break;
    case 7:
      console.log('Your gade is: D');
      break;
    case 6:
      console.log('Your gade is: E');
      break;
    case 5:
      console.log('Your gade is: F');
      break;
    default:
      console.log('Enter a valid cgpa');
      break;
  }
}

const x = 11;

function checkOddEven(x) {
  const y = x % 2 == 0 ? 'even' : 'odd';
  console.log(y);
}

const year = 2024;

function checkLeapYear(year) {
  if (year % 4 == 0 || (year % 400 == 0 && year % 100 == 0))
    console.log('Its a leap year');
  else console.log('Its not a leap year');
}

checkNumberSign(num);
checkAge(age);
checkLargestNumber(a, b, c);
checkDay(day);
checkGrade(cgpa);
checkOddEven(x);
checkLeapYear(year);
