const carts = [
    {
      product_name: "Cam",
      price: 20000,
      quantity: 5,
    },
    {
      product_name: "Táo",
      price: 30000,
      quantity: 3,
    },
    {
      product_name: "Xoài",
      price: 40000,
      quantity: 2,
    },
  ];

let sum = carts.reduce((temp,item)=> temp + item.price * item.quantity,0)
let sumPrice = 0;
carts.forEach((item) => sumPrice += item.price * item.quantity)
console.log(sum)  
console.log(sumPrice)