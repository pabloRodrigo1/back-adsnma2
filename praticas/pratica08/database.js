const { MongoClient } = require('mongodb');

let db = null;

const url = 'mongodb+srv://pablo:27221413jk@cluster0.gtx1w1b.mongodb.net/'

async function conectarDb() {
  if (db) {
    return db;
  }


  const client = new MongoClient(url);
  await client.connect();
  db = client.db('agenda');

  return db;
}

module.exports = conectarDb;