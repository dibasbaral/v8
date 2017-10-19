var demo_02_06;
(function (demo_02_06) {
    //Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        length: 20,
        breadth: 30,
        calcArea: function () {
            return this.length * this.breadth;
        }
    };
    console.log('rectangle area ' + rectangle.calcArea());
    //Functions
    var squareIt1 = function (x) { return x * x; };
    var val1 = squareIt1(2);
    console.log('squareIt1 ' + val1);
    // ? optional parameter
    var squareIt = function (rect) {
        if (rect.w == undefined) {
            return Math.pow(rect.h, 2);
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 });
    console.log('sq1 ' + sq1);
    var sq2 = squareIt({ h: 2067898734429374923748, w: 100.6803845834 });
    console.log('sq2 ' + sq2);
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=2-6-objects.js.map