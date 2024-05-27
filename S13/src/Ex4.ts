interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Định nghĩa lớp Circle
class Circle implements Geometry {
    private radius:number;
    
    constructor(_radius:number){
        this.radius = _radius
    }
    
    calculateArea():number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry{
    private width: number;
    private height: number;

    constructor(_width:number, _height: number) {
        this.width = _width;
        this.height = _height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle: Circle = new Circle(2);
console.log(circle.calculateArea())
console.log(circle.calculatePerimeter())

const retangle = new Rectangle(3,4);
console.log(retangle.calculatePerimeter())