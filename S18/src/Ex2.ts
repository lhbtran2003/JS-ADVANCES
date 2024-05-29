function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
    @timingDecorator
    add(a: number, b: number): number {
        return a + b;
    }

    @timingDecorator
    greet(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}!`;
    }
}

// Tạo đối tượng và gọi các hàm để kiểm tra logging
const example_1 = new ExampleClass();
example_1.add(15, 9);
example_1.greet("Hoàng");
example_1.greet("Tui", "Tớ");
