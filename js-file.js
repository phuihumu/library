const container = document.querySelector('.container');
const table = document.querySelector('table');

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
        table.appendChild(bookEntry);
        table.appendChild(bookEntryTitle);
        table.appendChild(bookEntryAuthor);
        table.appendChild(bookEntryPages);
        table.appendChild(bookEntryRead);
    }

}

harryPotter = new Book("Harry Potter", "J.K. Rowling", 500, "read");
gatsby = new Book("The Great Gatsby", "F. Scott Fitzgeral", 400, "read");
console.log(harryPotter.info());

addBookToLibrary(harryPotter);
addBookToLibrary(gatsby);
console.log(myLibrary);

displayAllBooks();