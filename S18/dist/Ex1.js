"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(target, propertyKey, descriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Tên function: ${propertyKey}`);
        console.log(`Truyền dô: ${JSON.stringify(args)}`);
        const result = originMethod.apply(this, args);
        console.log(`Kết quả trả về: ${result}`);
        return result;
    };
    return descriptor;
}
// Tạo class có logger
class ThuNghiem {
    add(a, b) {
        return a + b;
    }
    greet(name, greeting = "Hế lô bấy bì") {
        return `${greeting}, ${name}!`;
    }
}
__decorate([
    logger
], ThuNghiem.prototype, "add", null);
__decorate([
    logger
], ThuNghiem.prototype, "greet", null);
const tn_1 = new ThuNghiem();
tn_1.add(15, 9);
tn_1.greet("Hoàng");
