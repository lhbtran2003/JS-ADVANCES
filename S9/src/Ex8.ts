type Tuple = [string,number,number]
let tupleFunction = ([name,price,quantity]:Tuple):number => {
    return price * quantity
}
let product: Tuple = tupleFunction(["cá",5,6])