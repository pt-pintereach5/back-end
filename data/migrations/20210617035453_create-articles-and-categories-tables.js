
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', tbl => {
        tbl.increments('category_id');
        tbl.string('category').unique().notNullable();
    })
    .createTable('articles', tbl => {
        tbl.increments('article_id');
        tbl.string('title').unique().notNullable();
        tbl.string('author').notNullable();
        tbl.text('contents', 'long').notNullable();
        tbl.integer('category')
            .unsigned()
            .notNullable()
            .references('categories.category_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('articles')
    .dropTableIfExists('categories');
};
