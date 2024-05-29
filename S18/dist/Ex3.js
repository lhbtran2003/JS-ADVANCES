"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cachingDecorator(target, propertyKey, descriptor) {
    const originMethod = descriptor.value;
    const cacher = {};
    descriptor.value = function (...args) {
        const cacherKey = JSON.stringify(args);
        // Check
        if (cacherKey in cacher) {
            console.log(`Trả về kết quả lụm đc: ${cacherKey}`);
            return cacher[cacherKey];
        }
        const result = originMethod.apply(this, args);
        // Lưu kết quả vào cacherr
        cacher[cacherKey] = result;
        console.log(`Kết quả cho tham số: ${cacherKey}`);
        return result;
    };
    return descriptor;
}
// Ví dụ sử dụng hàm decorator
class ExampleClass_3 {
    add(a, b) {
        console.log(`Tính: (${a}, ${b})`);
        return a + b;
    }
    greet(name, greeting = "Hello") {
        console.log(`Tính(${name}, ${greeting})`);
        return `${greeting}, ${name}!`;
    }
}
__decorate([
    cachingDecorator
], ExampleClass_3.prototype, "add", null);
__decorate([
    cachingDecorator
], ExampleClass_3.prototype, "greet", null);
// Tạo đối tượng 
const example = new ExampleClass_3();
console.log(example.add(15, 9)); // Tính toán và lưu 
console.log(example.add(2, 3)); // Trả về kết quả từ cache
console.log(example.greet("Mỹ uyên")); // Tính toán và lưu 
console.log(example.greet("Sung")); // Trả về kết quả từ cache
