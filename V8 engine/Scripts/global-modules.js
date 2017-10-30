var Point = (function () {
    function Point(pointx, pointy) {
        this._pointx = pointx;
        this._pointy = pointy;
    }
    Point.prototype.calculateArea = function () {
        return Math.sqrt(this._pointx * this._pointy);
    };
    return Point;
}());
var point = new Point(1, 2);
//# sourceMappingURL=global-modules.js.map