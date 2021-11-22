const container = document.querySelector('.container');
const tableBody = document.querySelector('tbody');
const bookForm = document.querySelector('.bookForm');
const newBookTitle = document.querySelector('#title');
const newBookAuthor = document.querySelector('#author');
const newBookPages = document.querySelector('#pages');
const newBookReadYes = document.querySelector('#readYes');
const newBookReadNo = document.querySelector('#readNo');

let myLibrary = [];
let newBookRead;

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

    for (let i = 0; i < myLibrary.length; i++) {
        let bookEntry = document.createElement('tr');
        let bookEntryTitle = document.createElement('td');
        let bookEntryAuthor = document.createElement('td');
        let bookEntryPages = document.createElement('td');
        let bookEntryRead = document.createElement('td');
        let bookUpdateStatus = document.createElement('button');
        let bookRemove = document.createElement('button');

        bookEntryTitle.innerHTML = myLibrary[i].title;
        bookEntryAuthor.innerHTML = myLibrary[i].author
        bookEntryPages.innerHTML = myLibrary[i].pages;
        bookEntryRead.innerHTML = myLibrary[i].read;

        bookUpdateStatus.innerHTML = "Update Read Status";
        bookUpdateStatus.value = i;
        bookRemove.innerHTML = "Remove";
        bookRemove.value = i;

        bookEntry.appendChild(bookEntryTitle);
        bookEntry.appendChild(bookEntryAuthor);
        bookEntry.appendChild(bookEntryPages);
        bookEntry.appendChild(bookEntryRead);
        bookEntry.appendChild(bookUpdateStatus);
        bookEntry.appendChild(bookRemove);
        tableBody.appendChild(bookEntry);

        bookUpdateStatus.addEventListener("click", updateReadStatus);
        bookRemove.addEventListener("click", removeBookFromLibrary);
    }
}

const newBookBtn = document.querySelector("#new");
newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "flex";
});

const addBookButton = document.querySelector("#add");
addBookButton.addEventListener("click", () => {
        if (newBookReadYes.checked) {
            newBookRead = "read";
        }
        else {
            newBookRead = "not read yet";
        }
        addBookToLibrary(new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead));
        bookForm.style.display = "none";
        displayAllBooks();
    });

function removeBookFromLibrary(event) {
    let bookIndex = event.target.value;
    myLibrary.splice(bookIndex, 1);
    displayAllBooks();
}

function updateReadStatus(event) {
    let updateBook = event.target.value;
    let currentRead = myLibrary[updateBook].read;
    if (currentRead === "read")
    {
        myLibrary[updateBook].read = "not yet read";
    }
    else {
        myLibrary[updateBook].read = "read";
    }
    displayAllBooks();
}

harryPotter = new Book("Harry Potter", "J.K. Rowling", 500, "read");
gatsby = new Book("The Great Gatsby", "F. Scott Fitzgeral", 400, "read");

addBookToLibrary(harryPotter);
addBookToLibrary(gatsby);

/*
function setStyles() {
    let currentLibrary = localStorage.getItem('library');
    myLibrary = currentLibrary;
}

function populateStorage() {
    localStorage.setItem('library', myLibrary);

    setStyles();
    displayAllBooks();
}

if (!localStorage.getItem('library')) {
    populateStorage();
}
else {
    setStyles();
}*/