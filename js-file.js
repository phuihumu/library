const container = document.querySelector('.container');
const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const bookForm = document.querySelector('.bookForm');
const newBookTitle = document.querySelector('#title');
const newBookAuthor = document.querySelector('#author');
const newBookPages = document.querySelector('#pages');
const newBookRead = document.querySelector('#read');

let myLibrary = [];

//Constructor for making "Book" objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayAllBooks() {
    while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);

    for (const book of myLibrary) {
        let bookEntry = document.createElement('tr');
        let bookEntryTitle = document.createElement('td');
        let bookEntryAuthor = document.createElement('td');
        let bookEntryPages = document.createElement('td');
        let bookEntryRead = document.createElement('td');
        bookEntryTitle.innerHTML = book.title;
        bookEntryAuthor.innerHTML = book.author
        bookEntryPages.innerHTML = book.pages;
        bookEntryRead.innerHTML = book.read;
        bookEntry.appendChild(bookEntryTitle);
        bookEntry.appendChild(bookEntryAuthor);
        bookEntry.appendChild(bookEntryPages);
        bookEntry.appendChild(bookEntryRead);
        tableBody.appendChild(bookEntry);
    }
}

const newBookBtn = document.querySelector("#new");
newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "flex";
});

const addBookButton = document.querySelector("#add");
addBookButton.addEventListener("click", () => {
        addBookToLibrary(new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value));
        bookForm.style.display = "none";
        displayAllBooks();
    });


harryPotter = new Book("Harry Potter", "J.K. Rowling", 500, "read");
gatsby = new Book("The Great Gatsby", "F. Scott Fitzgeral", 400, "read");
//console.log(harryPotter.info());

addBookToLibrary(harryPotter);
addBookToLibrary(gatsby);
console.log(myLibrary);

//displayAllBooks();