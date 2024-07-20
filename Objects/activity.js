const book = {
  author: 'RD Sharma',
  title: 'Maths for class XII',
  year: '2019',
  display() {
    return `The book ${this.title} was written by ${this.author} in the year of ${this.year}`;
  },
  update(year) {
    this.year = year;
    return this.year;
  },
};

function bookScript(book) {
  console.log('Book object is: ', book);
  console.log('The author of Book is: ', book.author);
  console.log('The title of the Book is: ', book.title);
  book.display();
  book.update(2017);
  console.log('Updated book object is: ', book);
}

function nestedScript() {
  const nestedObj = {
    name: 'Maths',
    books: {
      book1: 'Maths for class X',
      book2: 'Maths for class XII',
      book3: 'Maths for KG',
    },
  };

  console.log('Nested object is: ', nestedObj);
  console.log(nestedObj.books.book3);
}

function logScript(book) {
  console.log('Book loop iterated using for...in loop: ');
  for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
      const element = book[key];
      console.log(key, ':', element);
    }
  }

  console.log('The keys of the book object are: ', Object.keys(book));
  console.log('The values of the book object are: ', Object.values(book));
}

bookScript(book);
nestedScript();
logScript(book);
