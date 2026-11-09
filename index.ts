interface vehicle {
    make: string;
    model:string;
    year:number;
    start():void
}
class Car implements vehicle {
    constructor(public make:string, public model:string, public year:number) {}
    start():void{
        console.log("Car engine started");
    }
}
const myNewCar = new Car("Toyota", "Camry", 2020);
myNewCar.start();