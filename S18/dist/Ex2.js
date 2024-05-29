"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function timingDecorator(target, propertyKey, descriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Log cái tên hàm 
        console.log(`Tên hàm: ${propertyKey}`);
        // Log các tham số 
        console.log(`Thám số: ${JSON.stringify(args)}`);
        // Bắt đầu đếm thời gian
        const start = performance.now();
        // Gọi hàm gốc và lấy kết quả trả về
        const result = originMethod.apply(this, args);
        // Kết thúc đếm thời gian
        const end = performance.now();
        // Tính toán thời gian thực thi
        const duration = end - start;
        // Log kết quả trả về và thời gian thực thi
        console.log(`kẾT QUẢ ${result}`);
        console.log(`thời gian thực thi: ${duration.toFixed(2)} milliseconds`);
        return result;
    };
    return descriptor;
}
class ExampleClass_2 {
    add(a, b) {
        return a + b;
    }
    greet(name, greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
}
__decorate([
    timingDecorator
], ExampleClass_2.prototype, "add", null);
__decorate([
    timingDecorator
], ExampleClass_2.prototype, "greet", null);
// Tạo đối tượng và gọi các hàm để kiểm tra logging
const example_1 = new ExampleClass();
example_1.add(15, 9);
example_1.greet("Hoàng");
example_1.greet("Tui", "Tớ");
