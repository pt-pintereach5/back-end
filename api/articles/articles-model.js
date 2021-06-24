const db = require('../../data/db-config');

function find() {
    return db('articles')
}

function findById(article_id) {
    return db('articles').where({article_id}).first();
}

async function create(article) {
    console.log(article);
    const [article_id] = await db('articles').insert(article);
    return findById(article_id);
}

async function update(article_id, article) {
    await db('articles').where({article_id}).update(article);
    return findById(article_id);
}

async function remove(article_id) {
    await db('articles').where({article_id}).del();
    return find();
}

function findArticleCategories(article_id) {
    return db('articles').join('articles-categories as ac', 'ac.article_id', 'articles.article_id').leftJoin('categories', 'categories.category_id', 'ac.category_id').select('category').where('articles.article_id', '=', article_id);
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove,
    findArticleCategories
}