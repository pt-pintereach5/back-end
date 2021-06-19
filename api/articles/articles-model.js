const db = require('../../data/db-config');

function find() {
    return db('articles')
}

function findById(article_id) {
    return db('articles').where({article_id}).first();
}

function findArticleCategories(article_id) {
    return db('articles').join('articles-categories as ac', 'ac.article_id', 'articles.article_id').leftJoin('categories', 'categories.category_id', 'ac.category_id').select('category').where('articles.article_id', '=', article_id)
}
module.exports = {
    find,
    findById,
}