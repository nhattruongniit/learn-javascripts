var a;
var b;
var c;
var d;
var e = ['a', 'b', 'c']; // number[], boolean[], any[]
var f;
var g;
var h;
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
;
var red = Color.Red;
// TypeAsserion
var aAss;
;
var drawPoint = function (point) {
    console.log("Draw a point at X : " + point.x + " and Y: " + point.y);
};
var movePoint = function (point) {
    //
};
var getDistance = function (pointA, pointB) {
    //
};
// ==================== Cohesion: những cái nào liên quan vs nhau thì nên để chung vs nhau ================= 
// Access Modifies: Public, Private, Protected
var CPoint = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function CPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    CPoint.prototype.drawPoint = function () {
        console.log("Draw a point at X : " + this._x + " and Y: " + this._y);
    };
    ;
    Object.defineProperty(CPoint.prototype, "x", {
        // Getters and Setters: properties
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0');
            }
            ;
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return CPoint;
}());
var newPoint = new CPoint(1, 2);
console.log("X is " + newPoint.x);
newPoint.x = 5;
newPoint.drawPoint();
