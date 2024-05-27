interface changeSpeed {
    speedUp(): number;
    slowDown(): number;
    stop(): number;
}

// Định nghĩa lớp Vehicle
class Vehicle implements changeSpeed {
    private speed: number;

    constructor(_speed:number) {
        this.speed = _speed;
    }

    speedUp(): number {
        return this.speed += 1;
    }

    slowDown(): number {
        return this.speed -=1;
    }

    stop(): number {
        return this.speed = 0;
    }
}

const vehicle:changeSpeed = new Vehicle(2);
console.log(vehicle.speedUp())