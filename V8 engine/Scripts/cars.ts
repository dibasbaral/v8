class Car {
    private _engine: Engine;
    constructor( engine: Engine) {
        this._engine = engine;
    }
    get engine(): Engine {
        return this._engine;
    }
    set engine(value: Engine) {
        if (value==undefined) {
            throw 'Please supply an engine';
         
        }
        this._engine = value;
    }
    public start() {
        alert('Car engine started ' + this._engine.EngineType);
    }
    public stop() {
        alert('car stopped ' + this._engine.EngineType + ' '+ this._engine.HorsePower);
    }
   
}
    
   

class Engine {
    public readonly  HorsePower: number;
    public readonly EngineType:string;
    constructor(public horsePower: number, public engineType: string) {
        this.HorsePower = horsePower;
        this.EngineType = engineType;
    }
}

window.onload = () => {
    var car = new Car(new Engine(123,"V8ghty"));

    car.start();
    car.stop();
};