let phoneBooks = []

class Contact {
    constructor(name,phone,email) {
        this.name = name
        this.phone = phone
        this.email = email 
    }

}
function addContact(name,phone,email) {
        const newContact = new Contact(name,phone,email)
        phoneBooks = [...phoneBooks,newContact]
}
function displayContact(arr) {
    phoneBooks.forEach(e => console.log)
}


