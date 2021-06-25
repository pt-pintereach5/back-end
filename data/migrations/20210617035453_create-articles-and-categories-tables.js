
exports.up = function(knex) {
  return knex.schema
    .createTable('articles', tbl => {
        tbl.increments('article_id');
        tbl.string('title').unique().notNullable();
        tbl.string('source').notNullable();
        tbl.string('author').notNullable();
        tbl.text('contents', 'long').notNullable();
    })
    .createTable('categories', tbl => {
        tbl.increments('category_id');
        tbl.string('category').unique().notNullable();
    })
    .createTable('articles-categories', tbl => {
        tbl.increments();
        tbl.integer('article_id')
            .unsigned()
            .notNullable()
            .references('articles.article_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('category_id')
            .unsigned()
            .notNullable()
            .references('categories.category_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('articles-categories')
    .dropTableIfExists('categories')
    .dropTableIfExists('articles');
};
