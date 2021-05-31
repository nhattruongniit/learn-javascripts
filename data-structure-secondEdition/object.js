function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printPages = function() {
    return this.pages
  }
}

Book.prototype.printTitle = function() {
  return this.title
}

const book = new Book('harry', 10, true);

console.log(book.printTitle())