type Square = {
    sideLength: number
}
type Circle = {
    radius: number
}
type UnknowGeometry = Square|Circle;
function calculateArea(shape: UnknowGeometry): any {
    let area: number;
    if("sideLength" in shape) {
        area = shape.sideLength * shape.sideLength;
        return area;
    }
    else if("radius" in shape) {
        area = shape.radius * Math.PI
        return area;
    }
  // return area ở đây thì area bị lỗi tại sao??  
}
const square: Square = {
  sideLength: 10
}
const circle: Circle = {
    radius: 2
}
console.log(calculateArea(square));