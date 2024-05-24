//Lop cha
class Employee {
    public name:string
    protected company: string
    private phone: string
    constructor(_name:string,_company:string,_phone:string) {
        this.name = _name
        this.company =_company
        this.phone = _phone
    }
    public getPhone() {
       return this.phone;
    }
    public setPhone(newPhone:string) {
       this.phone = newPhone
    }
    public printInfo(){
        console.log(`Ten nhan vien: ${this.name}
        Ten cong ty: ${this.company}
        So dien thoai: ${this.phone}`)
    }
}
//Lop con
class Manager extends Employee {
    teamSize: number
    constructor(_name: string, _company: string, _phone: string, _teamSize: number) {
        super(_name, _company, _phone);
        this.teamSize = _teamSize;
    }
    public printInfo(): void {
        super.printInfo();
        console.log(`So luong thanh vien trong team: ${this.teamSize}`);
    }
}
