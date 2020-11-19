
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Ingredient_name: 'Marinara Sauce'},
        {Ingredient_name: 'Flour'},
        {Ingredient_name: 'Cheese'},
        {Ingredient_name: 'Salt'},
        {Ingredient_name: 'Butter'},
        {Ingredient_name: 'Sugar'},
        {Ingredient_name: 'Baking Soda'},
        {Ingredient_name: 'Baking Powder'},
        {Ingredient_name: 'Italian Herbs'},
        {Ingredient_name: 'Chocolate Chips'}
      ]);
    });
};
