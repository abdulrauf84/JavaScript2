'use strict';

//2.1
let bookTitles = [
  'Harry Potter',
  'The Great Gatsby',
  'To Kill a Mockingbird',
  'The Hobbit',
  'Fahrenheit 451',
  'The Catcher in the Rye',
  'Pride and Prejudice',
];
//console.log(bookTitles);

//2.3
function booksList() {
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  bookTitles.map(book => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    return document.body.appendChild(ul.appendChild(li));
  });
}

//2.4 - 2.7
let books = [
  {
    book_title: 'Harry Potter',
    author: 'J.K Rowling',
    language: 'English',
    cover_image: 'harrypotter.jpg',
  },
  {
    book_title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    language: 'English',
    cover_image: 'thegreat.jpg',
  },
  {
    book_title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    language: 'English',
    cover_image: 'tokill.jpg',
  },
  {
    book_title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    language: 'English',
    cover_image: 'thehobbit.jpg',
  },
  {
    book_title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    language: 'English',
    cover_image: 'fahrenheit.jpg',
  },
  {
    book_title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    language: 'English',
    cover_image: 'thecatcher.jpg',
  },

  {
    book_title: 'Pride and Prejudice',
    author: 'Jane Austen',
    language: 'English',
    cover_image: 'pap.jpg',
  },
];
function booksInfo() {
  let mainDiv = document.getElementById('main');
  let ul = document.createElement('ul');

  books.map(book => {
    let li = document.createElement('li');
    let img = document.createElement('IMG');
    let p = document.createElement('p');
    img.src = './img/' + book.cover_image;
    img.setAttribute('width', '250');
    img.setAttribute('height', '300');
    img.setAttribute('alt', book.book_title);
    li.appendChild(img);
    p.innerHTML = `Title: ${book.book_title}<br/>Author: ${book.author}<br/>Language: ${
      book.language
    }`;

    li.appendChild(p);
    return mainDiv.append(ul.appendChild(li));
  });
}
booksInfo();
