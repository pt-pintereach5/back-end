const db = require('../../data/db-config');

function find() {
    return db('categories');
}

function findBy(filter) {
    console.log(filter)
    return db('categories').where(filter).first();
}

async function create(category) {
    //console.log(category);
    const [category_id] = await db('categories').insert(category, "*");
    return category_id;
}

module.exports = {
    find, 
    findBy,
    create
}