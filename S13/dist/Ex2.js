"use strict";
class Job {
    constructor(_type) {
        this.type = _type;
    }
    //phương thức để in ra loại công việc 
    printType() {
        console.log(this.type);
    }
    ;
}
class PartimeJob extends Job {
    constructor(_type, _workingHour, _isFullTime) {
        super(_type);
        this.workingHour = _workingHour;
        this.isFullTime = _isFullTime;
    }
    printType() {
        console.log(this.type);
    }
    calculateSalary() {
        if (this.isFullTime) {
            return 10000.000;
        }
        else {
            return this.workingHour * 30000;
        }
    }
}
const partTimeJob = new PartimeJob("bán hàng", 12, true);
console.log(partTimeJob);
