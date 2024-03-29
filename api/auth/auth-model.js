const db = require('../../data/db-config');

function findById(id) {
    return db('users').where({id}).first();
}

function findBy(filter) {
    return db('users').where(filter).first();
}

async function add(user) {
   const [id] = await db('users').insert(user, "*");
   return id;
}

module.exports = {
    findById,
    findBy,
    add
}