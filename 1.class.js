var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X :" + this.x + " and Y :" + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error("Value cannot be less than 0");
        this.x = value;
    };
    return Point;
}());
var point = new Point(2, 5);
point.draw();
point.setX(10);
console.log(point.getX());
