const { v4 } = require('uuid');

const db  = require('../../database')

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'João',
    email: 'joao@email.com',
    phone: '123123123',
    category_id: v4(),
  },
];
class ContactRepository {
  async findAlll() {
    const row= await db.query(`SELECT * FROM contacts`);
    return row;
  }
  async findById(id){

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

  async create({
    name, email, phone, category_id,
  }){
   const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
   VALUES($1, $2, $3, $4)
   RETURNING *
   `,[name, email, phone, category_id]);
   return row;
  }

  update({
    name, email, phone, category_id,
  }){
    return new Promise((resolve) =>{
      const updateContact = {
        id:v4(),
        name,
        email,
        phone,
        category_id
      };
      contacts =contacts.map((contact)=> (
        contact.id == id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();
