var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X :" + this.x + " and Y :" + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 2;
point.y = 5;
point.draw();
