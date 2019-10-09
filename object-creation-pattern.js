var obj = {
    val: 5,
    click: function() {
        alert("hello")
    }
}

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getName = function() {
    return this.name;
}


User.prototype.getAge = function() {
    return this.age;
}

var user = new User('truong', '30');

console.log(user.getName(), user.getAge());

//! Property private ====================

// Tạo cấu trúc cho đối tượng Classroom
function classRoom(students, teacher) {

    // Tạo một phương thức private hiển thị sinh viên trong lớp
    function get() {
        console.log(students.join(','))
    }

    // Tạo thuộc tính đối tượng lưu trữ thông tin
    this.students = students;
    this.teacher = teacher;

    // Gọi phương thức get
    get();

    // hàm nặc danh privileged
    this.privil = function() {
        return get;
    }
}

var myClass = new classRoom(["Truong", "Chien"], "Thao");
console.log(myClass.teacher);

myClass.privil();