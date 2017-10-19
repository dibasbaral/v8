var Car = (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined) {
                throw 'Please supply an engine';
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car engine started ' + this._engine.EngineType);
    };
    Car.prototype.stop = function () {
        alert('car stopped ' + this._engine.EngineType + ' ' + this._engine.HorsePower);
    };
    return Car;
}());
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
        this.HorsePower = horsePower;
        this.EngineType = engineType;
    }
    return Engine;
}());
window.onload = function () {
    var car = new Car(new Engine(123, "V8"));
    car.start();
    car.stop();
};
//# sourceMappingURL=cars.js.map