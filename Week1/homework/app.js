'use strict';

let bookTitles = [
  'Harry Potter',
  'The Great Gatsby',
  'To Kill a Mockingbird',
  'The Hobbit',
  'Fahrenheit 451',
  'The Catcher in the Rye',
  'Pride and Prejudice',
];

function booksList() {
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  bookTitles.map(book => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    return document.body.appendChild(ul.appendChild(li));
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

for (let book in books) {
  console.log(books[book]['book_title']);
  console.log(books[book]['author']);
  console.log(books[book]['language']);
}

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
