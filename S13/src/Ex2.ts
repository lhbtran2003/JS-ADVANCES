abstract class Job {
    type:string;

    constructor(_type:string) {
        this.type = _type;
    }

    //phương thức để in ra loại công việc 
    printType() {
        console.log(this.type);
    };

    //phương thức abstract để tính lương 
    abstract calculateSalary(): number
}

class PartimeJob extends Job{
    workingHour: number;
    isFullTime: boolean

    constructor(_type:string,_workingHour:number,_isFullTime:boolean){
        super(_type);
        this.workingHour = _workingHour;
        this.isFullTime = _isFullTime;
    }
    printType(): void {
        console.log(this.type);
    }
    
    calculateSalary(): number {
        if(this.isFullTime){
            return  10000.000;
        }
        else {
            return this.workingHour * 30000;
        }
    }
}

const partTimeJob: PartimeJob = new PartimeJob("bán hàng",12,true)
console.log(partTimeJob)
