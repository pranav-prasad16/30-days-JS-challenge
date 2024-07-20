function oneToTenPrint() {
  console.log('1 to 10 using for loop');
  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
  console.log('1 to 10 using while loop');
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

function fiveTable() {
  console.log('5 table using for loop');
  for (let index = 1; index <= 10; index++) {
    console.log(`5 X ${index} = ${5 * index}`);
  }
}

function TenToOnePrint() {
  console.log('Print 10 to 1 using while loop');
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }
}

function oneToFive() {
  console.log('Print 1 to 5 using do-while loop');
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

function factorialOfNum() {
  let num = 5;
  let factorial = 1;
  do {
    factorial *= num;
    num--;
  } while (num > 2);
}

function printPattern() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write('*' + '\t');
    }
    console.log('\n');
  }
}

oneToTenPrint();
fiveTable();
TenToOnePrint();
oneToFive();
factorialOfNum();
printPattern();
