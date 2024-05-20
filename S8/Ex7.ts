function checkType(input: any): void {
    if(typeof input === "number") {
        console.log("đây là dữ liệu number")
    }
    else if(Array.isArray(input)) {
        console.log("đây là dữ liệu mảng")
    }
    else if(input instanceof Object) {
        console.log("đây là dữ liệu object")
    }
    else {
        console.warn("Không xác định được kiểu dữ liệu")
    }
}
checkType(42)
checkType([1,2,3,4])
checkType({
    height: 12
})