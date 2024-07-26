class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  info() {
    return `${this.firstName} ${this.lastName} has turned ${this.age} years old recently`;
  }
  changeInfo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  updateAge(age) {
    this.age = age;
  }
  static greeting() {
    return `Hello this a static method greeting!`;
  }
}
console.log(Person.greeting());
const person1 = new Person('Mortal', 'Khamble', 26);
console.log(person1.info());
person1.updateAge(27);
console.log(person1.info());
person1.changeInfo('Deep', 'Thorat');
console.log(person1.info());

class Student extends Person {
  static count = 0;
  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this.studentID = studentID;
    Student.count++;
  }
  info() {
    return `${this.firstName} ${this.lastName} of age ${this.age} has a student ID ${this.studentID}`;
  }
  static getStudentCount() {
    return Student.count;
  }
}

const student1 = new Student('pranav', 'prasad', 21, 2113003321);
console.log(student1.info());
console.log(Student.greeting());
console.log('Student count is: ', Student.getStudentCount());

class Account extends Person {
  #balance;
  constructor(firstName, lastName, age, balance) {
    super(firstName, lastName, age);
    this.#balance = balance;
  }
  accountInfo() {
    return `${this.info()} and has the bank balance of $${this.#balance}`;
  }
  deposit(money) {
    this.#balance += money;
    return `$${money} has been deposited from the account`;
  }
  withdraw(money) {
    this.#balance -= money;
    return `$${money} has been withdrawed from the account`;
  }
}

const accountHolder = new Account('8bit', 'Goldy', 29, 998855);
console.log(accountHolder.accountInfo());
console.log(accountHolder.deposit(45));
console.log(accountHolder.accountInfo());
console.log(accountHolder.withdraw(300));
console.log(accountHolder.accountInfo());
