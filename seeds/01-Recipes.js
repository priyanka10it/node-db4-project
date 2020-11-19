
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Recipe_name: 'Pasta'},
        {Recipe_name: 'Pizza'},
        {Recipe_name: 'Cake'},
        {Recipe_name: 'Cookie'}
      ]);
    });
};
