// Class 11 Exercises: Classes

// let args = {
//   title: 'title',
//   author: 'author',
//   copyrightDate: 'copyrightDate',
//   isbn: 'isbn',
//   pages: 'pages',
//   checkedOout: 'checkedOout',
//   discard: 'discard'
// }
// let args = ['title', 'author', 'copyrightDate', 'isbn', 'pages', 'checkedOut', 'discard = No'];

// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, isbn, pages, checkedOut, discard = 'No') {
    this.title = title,
      this.author = author,
      this.copyrightDate = copyrightDate,
      this.isbn = isbn,
      this.pages = pages,
      this.checkedOut = checkedOut,
      this.discard = discard
  }
  getCopyrightDate() {
    return this.copyrightDate;
  }

  getCheckedOut() {
    return this.checkedOut;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, pages, checkedOut, discard = 'No'){
    super(title, author, copyrightDate, isbn, pages, checkedOut, discard = 'No');
  }

  updateDiscardStatus() {
    let year = new Date().getFullYear() - this.copyrightDate;
    if (year > 5) {
      this.discard = 'Yes';
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, pages, checkedOut, discard = 'No'){
    super(title, author, copyrightDate, isbn, pages, checkedOut, discard = 'No');
  }

  updateCheckedOut(num) {
    this.checkedOut += num;
  }
  needToDiscard() {
    if (this.checkedOut > 100) {
      this.discard = 'Yes';
    }
  }
}
// Declare the objects for part 2 here:
let pride = new Novel('Pride and Prejudice', 'Jane Austen', 1883, 1111111111111, 432, 32);
let tssbm = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1)

// console.log(pride.checkedOut);
// pride.updateCheckedOut(5);
// console.log(pride.checkedOut);

// Code part 3 here:

// 4
console.log(tssbm);
tssbm.updateDiscardStatus();
console.log(tssbm);

// 5
console.log(pride);
pride.updateCheckedOut(5);
console.log(pride);