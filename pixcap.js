var EmployeeOrgApp = /** @class */ (function () {
    function EmployeeOrgApp(ceo) {
        this.ceo = ceo;
    }
    EmployeeOrgApp.prototype.undo = function () {
        throw new Error("Method not implemented.");
    };
    EmployeeOrgApp.prototype.move = function () { };
    EmployeeOrgApp.prototype.redo = function () { };
    EmployeeOrgApp.prototype.getCeo = function () {
        return this.ceo;
    };
    return EmployeeOrgApp;
}());
var ceo = {
    uniqueId: 1,
    name: "Mark Zuckerberg",
    subordinates: []
};
var app = new EmployeeOrgApp(ceo);
console.log("getCEO: ", app.getCeo());
