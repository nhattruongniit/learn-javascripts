class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn= isbn;
  };

  printIsbn() {
    console.log('printIsbn: ', this.isbn);
  }
}

let book = new Book('Structure code', 150, true);
book.printIsbn();


// Inheritance

class IBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title);
    this.technology = technology;
  }

  printSuper() {
    console.log('printSuper title: ', this.title);
  }
}


let iBook = new IBook('Structure code', 150, true);
iBook.printSuper();
