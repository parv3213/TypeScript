var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X :" + this.x + " and Y :" + this.y);
    };
    return Point;
}());
var point1 = new Point();
point1.draw();
var point = new Point(2, 5);
point.draw();
