const library = [];

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, isRead) {
  library.push(new Book(title, author, pages, isRead));
}

addBookToLibrary(
  'The Priory of the Orange Tree',
  'Samantha Shannon',
  848,
  true,
);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 366, true);
addBookToLibrary('Fourth Wing', 'Rebecca Yarros', 528, true);
addBookToLibrary('A Court of Thorns and Roses', 'Sarah J. Maas', 419, true);
addBookToLibrary('Arcana Academy', 'Elise Kova', 576, false);
addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  'J.K. Rowling',
  333,
  true,
);

function displayBook(title, author, pages, isRead) {
  const main = document.querySelector('main');
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  h2.textContent = title;
  h3.textContent = author;
  p.textContent = `${pages} pages, ${isRead ? 'read' : 'not read yet'}`;

  article.append(h2, h3, p);
  main.appendChild(article);
}

function initDisplayLibrary() {
  for (const book of library) {
    displayBook(book.title, book.author, book.pages, book.isRead);
  }
}

initDisplayLibrary();

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  const formData = new FormData(form);
  const dataArray = [];
  for (const value of formData.values()) {
    if (value === 'true') {
      dataArray.push(true);
    } else if (value === 'false') {
      dataArray.push(false);
    } else if (Number.isInteger(Number(value))) {
      dataArray.push(Number(value));
    } else {
      dataArray.push(value);
    }
  }
  addBookToLibrary(...dataArray);
  displayBook(...dataArray);
  form.reset();
});

const dialog = document.querySelector('dialog');
const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', () => {
  dialog.close();
});
