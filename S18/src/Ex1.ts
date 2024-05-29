function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
    @logger
    add(a: number, b: number): number {
        return a + b;
    }

    @logger
    greet(name: string, greeting: string = "Hế lô bấy bì"): string {
        return `${greeting}, ${name}!`;
    }
}

const tn_1 = new ThuNghiem();
tn_1.add(15, 9);
tn_1.greet("Hoàng");
