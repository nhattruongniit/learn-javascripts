// https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e

const myFavouriteAuthors = {
  allAuthors: {
    finction: ["Agatha Christie", "J. K. Rowling", "Dr. Ar"],
    scienceFinction: [
      "Neal Stephenson",
      "Arthur Clarke",
      "Isaac Asimov",
      "Robert Heinlein"
    ],
    fantasy: ["Rado", "Iron man", "Hulk", "Spider"]
  },

  getAllAuthors() {
    const authors = [];

    for (const author of this.allAuthors.finction) {
      authors.push(author);
    }

    for (const authtor of this.allAuthors.scienceFinction) {
      authors.push(author);
    }
  }
};

for (let author of myFavouriteAuthors) {
  console.log(author);
}
