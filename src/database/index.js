const { Client } = require('pg');
const { connect } = require('../routes');

const client = new Client({
  host: '136.18.186.31',
  port:5432,
  user:'root',
  password:'root',
  database:'mycontacts',
})
client.connect();
exports.query  = async (query, values) =>{
  const {rows} = await client.query(query,values);
  return rows;
}
