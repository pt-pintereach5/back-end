
exports.seed = function(knex) {
      return knex('articles-categories').insert([
        {id: 1, article_id: 1, category_id: 1},
        {id: 2, article_id: 2, category_id: 2},
        {id: 3, article_id: 3, category_id: 3},
      ]);
};
