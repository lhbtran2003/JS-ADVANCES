"use strict";
function calculateArea(shape) {
    let area;
    if ("sideLength" in shape) {
        area = shape.sideLength * shape.sideLength;
        return area;
    }
    else if ("radius" in shape) {
        area = shape.radius * Math.PI;
        return area;
    }
    // return area ở đây thì area bị lỗi tại sao??  
}
const square = {
    sideLength: 10
};
const circle = {
    radius: 2
};
console.log(calculateArea(square));
