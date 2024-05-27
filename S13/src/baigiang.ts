// Tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// Ví dụ: Con người: chiều cao, cân nặng, nói
// Phương thức trừu tượng: là phương thức ko có phần thân

// interface - giao diện tính năng
interface IShape {//Interface Shape
    // Khai báo các thuộc tính và phương thức trừu tượng
    chuVi: number
    dienTich: number
    // Phương thức
    tinhChuVi: ()=>number
    tinhDienTich: () => number;
}
// Tạo 1 lớp kế thừa và triển khai các phương thức trừu tượng 
class Square implements IShape {
    chuVi: number = 0;
    dienTich: number = 0;
    canh: number;
    // contructor
    constructor(_canh:number){
      this.canh = _canh;
    }
    // Phải triển khai toàn bộ các phương thức trừu tượng của Interface
    tinhChuVi = () => {
        return this.canh * 4;
    };
    tinhDienTich = () => {
        return this.canh * this.canh;
    }
}

// Abstract class
abstract class Animals {
    // các phương thức và thuộc tính trừu tượng
    species: string;
    sex: boolean;
    color: string;
    constructor(_species:string, _sex:boolean, _color:string){
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfor(){
        return `Animal [specie: ${this.species} | sex: ${this.sex} | color: ${this.color}]`
    }
    // Các phương thức trừu tượng
    abstract makeSound: ()=>string;
}

class Dog extends Animals {
    constructor(_species: string, _sex:boolean, _color:string){
        super(_species,_sex,_color)
    }
     // triển khai toàn bộ phương thức trừu tượng
     makeSound =  () => {
        return "gâu gâu"
     }
}

let dogOne: Animals = new Dog("")
