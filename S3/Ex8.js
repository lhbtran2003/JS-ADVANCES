function insertArray(arr1, arr2, position) {
    if (position < 0 || position > arr1.length) {
        console.log("Vị trí chèn không hợp lệ.");
        return;
    }

    let newArr = arr1.slice(0, position).concat(arr2).concat(arr1.slice(position));

    return newArr;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c'];
let position = 2;

let result = insertArray(array1, array2, position);
if (result) {
    console.log(result);
}
