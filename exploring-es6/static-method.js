class User {
  constructor(name) {
    this.name = name;
  }

  static getUser() {
    return this.name;
  }
}

class Student extends User { }

const user = Student.getUser('truong');

console.log(user)