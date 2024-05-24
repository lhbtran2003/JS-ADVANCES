//lp cha
class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // Phương thuc in ra thong tin hien tai
    public getDescription(): string {
        return `ten: ${this.name}, 
        gia: ${this.price}`;
    }
}
//lop con
class Electronics extends Product {
    private brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    // ghi de getDescription tu lp cha
    public getDescription(): string {
        const productDescription = super.getDescription();
        return `${productDescription}, brand name: ${this.brand}`;
    }
}
