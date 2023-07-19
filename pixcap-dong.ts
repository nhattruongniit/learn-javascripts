interface Employee {
  uniqueId: number;
  name: string;
  subordinates: Employee[];
}

interface IAddSubordinateControl {
  undo(): void;
  redo(): void;
}

interface IEmployeeOrgApp {
  addSubordinate(employee: Employee): IAddSubordinateControl;
  getCeo: Employee;
}

class AddSubordinateControl implements IAddSubordinateControl {
  private _ceo: Employee;
  private _lastEmployee?: Employee;

  constructor(ceo: Employee) {
    this._ceo = ceo;
  }

  undo() {
    if (!!this._lastEmployee) return;
    this._lastEmployee = this._ceo.subordinates.pop() as Employee;
  }

  redo() {
    if (!this._lastEmployee) return;
    this._ceo.subordinates.push(this._lastEmployee);
  }
}

class EmployeeOrgApp implements IEmployeeOrgApp {
  private _ceo: Employee;

  constructor(ceo: Employee) {
    this._ceo = ceo;
  }

  addSubordinate(employee: Employee) {
    this._ceo.subordinates.push(employee);

    return new AddSubordinateControl(this._ceo);
  }

  get getCeo() {
    return this._ceo;
  }
}

const ceo: Employee = {
  uniqueId: 1,
  name: "Mark Zuckerberg",
  subordinates: [], //[Employee, Employee, ....]
};
const subor1: Employee = {
  uniqueId: 2,
  name: "subor1",
  subordinates: [], //[Employee, Employee, ....]
};
const subor2: Employee = {
  uniqueId: 2,
  name: "subor1",
  subordinates: [], //[Employee, Employee, ....]
};

const app = new EmployeeOrgApp(ceo);
const action = app.addSubordinate(subor1);
console.log(1, JSON.parse(JSON.stringify(app.getCeo)));
action.undo();
console.log(2, JSON.parse(JSON.stringify(app.getCeo)));
action.redo();
console.log(3, JSON.parse(JSON.stringify(app.getCeo)));
const action2 = app.addSubordinate(subor2);
