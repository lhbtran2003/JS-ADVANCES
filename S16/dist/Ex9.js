"use strict";
let originArr = [1, [2, [3, 4], 5], 6];
const lamPhangMang = (arr) => {
    let newArray = [];
    arr.forEach(e => {
        if (Array.isArray(e)) { //phần tử là 1 mảng
            newArray = [...newArray, ...lamPhangMang(e)];
        }
        else {
            newArray = [...newArray, e];
        }
    });
    return newArray;
};
console.log(lamPhangMang(originArr));
