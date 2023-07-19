/* Below is an example organisation chart. At the top is the ceo, Mark Zuckerberg. Mark's subordinates are Sarah, Tyler, Bruce and Georgina.
Mark Zuckerberg:
  - Sarah Donald:
    - Cassandra Reynolds: 
      - Mary Blue:
      - Bob Saget:
        - Tina Teff:
          - Will Turner:
  - Tyler Simpson:
    - Harry Tobs:
      - Thomas Brown: 
    - George Carrey:
    - Gary Styles: 
  - Bruce Willis:
  - Georgina Flangy:
    - Sophie Turner:

The CEO is represented with the following structure.

interface Employee { 
  uniqueId: number;
  name: string; 
  subordinates: Employee[];
}

const ceo: Employee = { 
  uniqueId: 1
  name: Mark Zuckerberg,
  subordinates: [Employee, Employee, ....] 
}

Your task is to create a concrete class called EmployeeOrgApp that implements IEmployeeOrgApp. The class should be instantiable 
with the ceo as a constructor parameter.
E.g. const app = new EmployeeOrgApp(ceo)

The class should:
1. move employee A to become the subordinate of employee B (i.e. B becomes A's supervisor)
2. undo/redo the move action

ASSUMPTIONS: You may assume:
- when an employee (e.g. Bob Saget) is moved to a new supervisor (e.g. Georgina), Bob's existing subordinates (Tina Teff) will become the subordinate of Cassandra, Bob's old supervisor.
- employees without any subordinates have an empty list for their subordinates property
- You may not clone the state/tree during each action (move/undo/redo).

ASSESSMENT CRITERIA:
1. The efficiency of the code
2. Object oriented programming design 
3. Readability
4. Completeness of solution

REQUIREMENTS:
Must be written in Typescript.
*/

interface Employee {
  uniqueId: number;
  name: string;
  subordinates: Employee[];
}

interface IEmployeeOrgApp {
  ceo: Employee;
  /**
  * Moves the employee with employeeID (uniqueId) under a supervisor
  (another employee) that has supervisorID (uniqueId).
  * E.g. move Bob (employeeID) to be subordinate of Georgina (supervisorID). * @param employeeID
  * @param supervisorID
  */
  move(employeeID: number, supervisorID: number): void;
  /** Undo last move action */
  undo(): void;
  /** Redo last undone action */
  redo(): void;
}

class EmployeeOrgApp implements IEmployeeOrgApp {
  private employeesMap: Map<number, Employee>;
  private actionsStack: { action: string; data: any }[];
  private undoStack: { action: string; data: any }[];

  constructor(public ceo: Employee) {
    this.employeesMap = new Map();
    this.buildEmployeeMap(this.ceo);
    this.actionsStack = [];
    this.undoStack = [];
  }

  // Helper function to recursively build the employeesMap
  private buildEmployeeMap(employee: Employee) {
    this.employeesMap.set(employee.uniqueId, employee);
    for (const subordinate of employee.subordinates) {
      this.buildEmployeeMap(subordinate);
    }
  }

  move(employeeID: number, supervisorID: number): void {
    if (
      !this.employeesMap.has(employeeID) ||
      !this.employeesMap.has(supervisorID)
    ) {
      throw new Error("Invalid employeeID or supervisorID");
    }

    const employee = this.employeesMap.get(employeeID);
    const currentSupervisorID = this.findCurrentSupervisorID(employeeID);
    const supervisor = this.employeesMap.get(supervisorID);
    const oldSupervisor = this.employeesMap.get(currentSupervisorID);

    if (!supervisor || !oldSupervisor) {
      throw new Error("Invalid employeeID or supervisorID");
    }

    this.actionsStack.push({
      action: "move",
      data: { employeeID, currentSupervisorID },
    });

    // Update the subordinates list of the old supervisor

    if (!oldSupervisor) return;
    oldSupervisor.subordinates = oldSupervisor.subordinates.filter(
      (e) => e.uniqueId !== employeeID
    );

    // Update the subordinates list of the new supervisor
    supervisor.subordinates.push(employee as Employee);
  }

  private findCurrentSupervisorID(employeeID: number): number {
    let currentSupervisorID = -1;
    for (const [, employee] of this.employeesMap) {
      for (const subordinate of employee.subordinates) {
        if (subordinate.uniqueId === employeeID) {
          currentSupervisorID = employee.uniqueId;
          break;
        }
      }
    }
    return currentSupervisorID;
  }

  undo(): void {
    const lastAction = this.actionsStack.pop();

    if (this.actionsStack.length === 0 || !lastAction) {
      throw new Error("Nothing to undo");
    }

    this.undoStack.push(lastAction);

    if (lastAction.action === "move") {
      const { employeeID, currentSupervisorID } = lastAction.data;

      const employee = this.employeesMap.get(employeeID);
      const oldSupervisor = this.employeesMap.get(currentSupervisorID);
      const newSupervisorID = this.findCurrentSupervisorID(employeeID);
      const newSupervisor = this.employeesMap.get(newSupervisorID);

      if (!newSupervisor || !oldSupervisor) {
        throw new Error("Invalid employeeID or supervisorID");
      }

      oldSupervisor.subordinates.push(employee as Employee);
      newSupervisor.subordinates = newSupervisor.subordinates.filter(
        (e) => e.uniqueId !== employeeID
      );
    }
  }

  redo(): void {
    const lastUndoneAction = this.undoStack.pop();

    if (this.undoStack.length === 0 || !lastUndoneAction) {
      throw new Error("Nothing to redo");
    }

    this.actionsStack.push(lastUndoneAction);

    if (lastUndoneAction.action === "move") {
      const { employeeID, currentSupervisorID } = lastUndoneAction.data;
      this.move(employeeID, currentSupervisorID);
    }
  }
}

const ceo: Employee = {
  uniqueId: 1,
  name: "Mark Zuckerberg",
  subordinates: [
    {
      uniqueId: 2,
      name: "Sarah Donald",
      subordinates: [
        {
          uniqueId: 3,
          name: "Cassandra Reynolds",
          subordinates: [
            {
              uniqueId: 4,
              name: "Mary Blue",
              subordinates: [],
            },
            {
              uniqueId: 5,
              name: "Bob Saget",
              subordinates: [
                {
                  uniqueId: 6,
                  name: "Tina Teff",
                  subordinates: [
                    {
                      uniqueId: 7,
                      name: "Will Turner",
                      subordinates: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      uniqueId: 8,
      name: "Tyler Simpson",
      subordinates: [
        {
          uniqueId: 9,
          name: "Harry Tobs",
          subordinates: [
            {
              uniqueId: 10,
              name: "Thomas Brown",
              subordinates: [],
            },
          ],
        },
      ],
    },
  ],
};

const app = new EmployeeOrgApp(ceo);
app.move(7, 8);

console.log("results: ", { ceo });

/* 
Đông:
https://www.typescriptlang.org/play?ssl=44&ssc=15&pln=44&pc=27&fbclid=IwAR2rEVhMC8ZwBZrwx779wGR8GPRkt-Gdc22wjJK1p0UuQ7PEN4d0MXYwFzE#code/JYOwLgpgTgZghgYwgAgKIFsAOAbA9gTwhQG8AoZZAVxGAEdKIBJAEwC5kRL0AjaAbnIc46COwDOYKKADmAimMrdcUZqDiQx7DDgJEA2gF0BAX1KlQkWIhSMAgs2YBlRctUh1EAMK5wUXNmQyCmpmXAAKAEp2ADdcYGY5ZCgIUMiYuITSU3NwaHgkZEZtPEIIAHkoaVtMTEDBOAdnJRU1SDCILBKiLU7dCCjC+ycXFvdIb19-ROkIME8IXB6dUpMzBGw4MTFkIabXVq8fSX9kYE6OiHBtu0aRtw8J44Cg5EwpaI9kAH0kRbRelaCN7AD6Qb4bCTFPoAfiWXQgAkECB8EiglAQYGUYV+cL6ETqFAoYAAFsAxAA6H4LZAAXmQv0S2WCIFS+JeFGAMGQYQAhDySWTKRCwFDSvjkmBKFAQIkiaSKV9haKiLTkAKFb9yQpmvcNOTMLhMJFkJt-ssiIyzBRkqyCYTOdz+fKhZsRQCiOLZlKZYI5YKqbgtXcDhTMJQxMSwuqXZD3f1Ldl1pttsrypVqrUzjgLldCqmKlUanbgaCUAHcYCkSjJOjMVBsQsKx67X6NdS6QzBEyTbcdQd2nGm-0W2rnQGg32xhBQ+HIx1zfGrYSJd6OBAAO47Xv7KePPzYKNj34RS2CGZgZDn+bhNm+pJe6Wj-2diimRPV+mNs3w1Uvah0BgWHYABGAAaQR3BEdgAHIAFk4CgABrZAAC10UQ6BeEqaDwPkYMp00ZBDFA5AAHpSL0VMSKo5ByTo8kDCyARkRACRkG1ZRgKHX9BH-egmDYZAACZcKEKDkGgjioGAnDBCk3Vp3YYiyIomiaPohimNIFi2KkoTuLpP8aH4oDhNEyDRAkqSZNE+SQyUgwSPIyi42o1zaPoxjjERHSLzgIs6RADdvz6AsMwbXAT20j9EDAYAfFVfzMHJBphknDwwmsqKdP8CByTwaQwjA5AAClHDKAA5fUELECAwjKyqtUkGROXwMIkvJK8FgiHqBFi+KQHJEIb2YlFcvy3BCpE0ryqqzAarqhqqtRFqYDajqusi3rSH6nxyRtEbotY8aCrCABmEiluqqBavq2amqkEBpFa9qak62Zrx67KYoxAahMSt7Ur2UYMr0qKgA

playgroud ts: 
https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgKIFsAOAbA9gTwhQG8AoZZAVxGAEdKIBJAEwC5kRL0AjaAbnIc46COwDOYKKADmAimMrdcUZqDiQx7DDgJEA2gF0BAX1KlQkWIhSNteQhADyUaQEFMmZGQpJcWrPZEcsgA9ABUYYJhyACyuABuEGLIYAAWKBABuigA7sBpyJk6DowAIsgAFNR0DCwAlFQgzNDIcMgKmNDxwGLKghVwILhpLUWBEA1p6sipcMkdXT3KZZXV9EzMdQB0UWhb0lvI6AkoAEK43JVj2WWTuMi87YrKqiDqKLgwyADiEMrSakqCyg3V6UFuh2iAAFMHAoMJClkSqVdjC4QjgaDliiKGEQoJjokKtdkexODxoAAaJ6dEFLcGlMlcXhQOrseK4YDMYLhaIAVSa92wczARxOrQQYGAuBAyDxjWYuAqbOQHK5PIiyAAShBFchhRIFTKUIgpTK5fiKFBdUqVWruWYKNIIGAAMJ-ZXszkO0ykBAG5J2bLONweZDAAKZCDgZK2JFEEPuTzeZCYRTYYAIZC+fzFIKCBAyiRQSiS5QVHNoeMTLyCChpHpbXzIAC82b+glMFEE1EVntV3trncdYqJJKIZWpmPpty9XNrFG7FF9Vpt-ftQ+XI+dbo9DRTq7AlCgsobYibHa3vsLIENlaDDlbC8aNQ27AAjNTkII3iJ2AAiGI4QAa2QAAtUtgOgFlpH-SlBAUJQVDUDR2EMeDjAEP0i1FRDlHfXNxifFM1lqNhkAAJngihf1EZAAHIAGV0VSZBShlOBsGYejqKeJDXneTRkHQ79MOw29cOeKAKMI7JiJ7Gh1hYdgqJ-YQ6Po105jEQZmHhbUIHwIYuLEHiEKkgTUOEgwMKwm9DTgMM2xACAcirPMnBcJMKz+OozHs3BsAgLY8GkCp6J3d0-AY6lHMwfYXSi5U6iAA

*/
