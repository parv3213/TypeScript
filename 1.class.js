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
    return Point;
}());
var point = new Point(2, 5);
point.draw();
console.log(point.getX());
