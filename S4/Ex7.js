let phoneBooks = []

class Contact {
    constructor(name,phone,email) {
        this.name = name
        this.phone = phone
        this.email = email 
    }

}
function addContact(obj) {
        phoneBooks.push(obj)
}
function displayContact(arr) {
    console.log(arr)
}

let ct1 = new Contact("BTRAN",12345,"abc@gmail.com")
let ct2 = new Contact("Vtu", 7654, "abc@gmail.com")
addContact(ct1)
addContact(ct2)
displayContact(phoneBooks)

