class A {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    protected showName(): void {
      console.log(`Tên: ${this.name}`);
    }
  }
  
  class B extends A {
    // co the truy cap thuoc tinh protected tu lp cha
    showStudentInfo(): void {
      console.log(`Ten: ${this.name}`);
      this.showName(); // goi phuong thuc protected
    }
  }

  //private la ko the truy cap cai gi het tu lop cha
  