
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_id: 1, category: 'politics'},
        {category_id: 2, category: 'science'},
        {category_id: 3, category: 'life'},
      ]);
    });
};
