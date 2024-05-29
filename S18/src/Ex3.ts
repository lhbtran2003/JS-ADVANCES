function cachingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originMethod = descriptor.value;
    const cacher: { [key: string]: any } = {};

    descriptor.value = function (...args: any[]) {
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
    @cachingDecorator
    add(a: number, b: number): number {
        console.log(`Tính: (${a}, ${b})`);
        return a + b;
    }

    @cachingDecorator
    greet(name: string, greeting: string = "Hello"): string {
        console.log(`Tính(${name}, ${greeting})`);
        return `${greeting}, ${name}!`;
    }
}

// Tạo đối tượng 
const example = new ExampleClass_3();
console.log(example.add(15, 9)); // Tính toán và lưu 
console.log(example.add(2, 3)); // Trả về kết quả từ cache
console.log(example.greet("Mỹ uyên")); // Tính toán và lưu 
console.log(example.greet("Sung")); // Trả về kết quả từ cache
