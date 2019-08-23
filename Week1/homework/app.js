'use strict';

let bookTitles = [
  'Harry_Potter',
  'The Great_Gatsby',
  'To_Kill_a _Mockingbird',
  'The_Hobbit',
  'Fahrenheit_451',
  'The Catcher_in_the_Rye',
  'Pride_and_Prejudice',
];

function booksList() {
  let bookList = document.createElement('div');
  let ul = document.createElement('ul');
  bookTitles.map(book => {
    let li = document.createElement('li');
    let bookNames = book.replace(/_/g, ' ');
    li.appendChild(document.createTextNode(bookNames));
    ul.appendChild(li);
    return document.body.appendChild(bookList.appendChild(ul));
  });
}
booksList();

let books = {
  book1: {
    book_title: 'Harry Potter',
    author: 'J.K Rowling',
    language: 'English',
    cover_image: 'harrypotter.jpg',
  },
  book2: {
    book_title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    language: 'English',
    cover_image: 'thegreat.jpg',
  },
  book3: {
    book_title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    language: 'English',
    cover_image: 'tokill.jpg',
  },
  book4: {
    book_title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    language: 'English',
    cover_image: 'thehobbit.jpg',
  },
  book5: {
    book_title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    language: 'English',
    cover_image: 'fahrenheit.jpg',
  },
  book6: {
    book_title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    language: 'English',
    cover_image: 'thecatcher.jpg',
  },

  book7: {
    book_title: 'Pride and Prejudice',
    author: 'Jane Austen',
    language: 'English',
    cover_image: 'pap.jpg',
  },
};

function booksDetails() {
  let ul = document.createElement('ul');

  for (let book in books) {
    let li = document.createElement('li');
    let img = document.createElement('IMG');
    let p = document.createElement('p');
    img.src = './img/' + books[book]['cover_image'];

    li.appendChild(img);
    p.innerHTML =
      'Title: ' +
      books[book]['book_title'] +
      '</br>' +
      'Author: ' +
      books[book]['author'] +
      '</br>' +
      'Language: ' +
      books[book]['language'];

    li.appendChild(p);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
booksDetails();
