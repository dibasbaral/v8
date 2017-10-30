
interface IPoint {
    calculateArea: () => number;

}

class Point implements IPoint {
    private _pointx;
    private _pointy;
    constructor(pointx: number, pointy: number) {
        this._pointx = pointx;
        this._pointy = pointy;
    }
    calculateArea(): number {
        return Math.sqrt(this._pointx * this._pointy);
    }

}


var point = new Point(1, 2);

