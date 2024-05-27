abstract class Shape {
    name:string
    
    constructor(_name:string){
        this.name = _name;
    }
    
    getName(){
        return this.name;
    }
    
    abstract getSize(): number
}

class Retangle extends Shape {
    width: number;
    height: number;
    
    constructor(_name:string,_width:number,_height:number) {
        super(_name)
        this.width = _width
        this.height = _height
    }

    getSize(){
        return this.width*this.height
    }

}


    

