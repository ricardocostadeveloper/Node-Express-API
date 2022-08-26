const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123123123',
    category: v4(),
  },
  {
    id: v4(),
    name: 'João',
    email: 'joao@email.com',
    phone: '123123123',
    category: v4(),
  },
];
class ContactRepository {
  findAlll() {
    return new Promise((resolve) => resolve(contacts));
  }
  findById(id){

    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id == id),
    ));
  }

  findByEmail(email){

    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email == email)
    ));
  }

  delete(id){
    return new Promise((resolve) =>{
      contacts = contacts.filter((contact) => contact.id != id);
      resolve();
    });
  }

  create({
    name, email, phone, category,
  }){
    return new Promise((resolve) =>{
      const newContact = {
        id:v4(),
        name,
        email,
        phone,
        category
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update({
    name, email, phone, category,
  }){
    return new Promise((resolve) =>{
      const updateContact = {
        id:v4(),
        name,
        email,
        phone,
        category
      };
      contacts =contacts.map((contact)=> (
        contact.id == id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();
