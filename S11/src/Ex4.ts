class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(_name: string, _speed: number, _id: number) {
        this.name = _name;
        this.speed = _speed;
        this.id = _id;
    }
    // phuong thuc giam toc
    public slowDown(): void {
        this.speed -= 5; //this.speed = this.speed - 5 
    }
    // phuong thuc tang toc
    public speedUp(): void {
        this.speed += 5;
    }
    // in ra toc do hien tại
    public showSpeed(): void {
        console.log(`Toc do hien tai la ${this.speed}`);
    }
}
//Lop con
class Bicycle extends Vehicle {
    private gear: number //so banh rang
    constructor(_name: string, _speed: number, _id: number, _gear: number) {
        super(_name, _speed, _id)
        this.gear = _gear
    }
    getGear() {
        return this.gear;
    }
    setGear(_newGear: number) {
        this.gear = _newGear;
    }
    // phuong thuc giam toc
    public slowDown(): void {
       super.slowDown()
    }
    public speedUp(): void {
        super.speedUp()
    }
    public showSpeed(): void {
        super.showSpeed()
    }



}
const bicycle: Bicycle = new Bicycle("carbon 50 trieu", 100, 1, 7);

