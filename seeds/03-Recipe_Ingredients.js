
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe_Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_Ingredients').insert([
        {Recipe_id: 1 , Ingredient_id: 1 ,Quantity: 2.25},
        {Recipe_id: 1 , Ingredient_id: 3 ,Quantity: 3.5},
        {Recipe_id: 2 , Ingredient_id: 1 ,Quantity: 1.5},
        {Recipe_id: 2 , Ingredient_id: 3 ,Quantity: 5.25},
        {Recipe_id: 3 , Ingredient_id: 2 ,Quantity: 2.5},
        {Recipe_id: 3 , Ingredient_id: 5 ,Quantity: 1.25},
        {Recipe_id: 3 , Ingredient_id: 6 ,Quantity: 1.5},
        {Recipe_id: 3 , Ingredient_id: 7 ,Quantity: 0.25},
        {Recipe_id: 3 , Ingredient_id: 8 ,Quantity: 0.5},
        {Recipe_id: 4 , Ingredient_id: 2 ,Quantity: 5.5},
        {Recipe_id: 4 , Ingredient_id: 10 ,Quantity: 2.25}
      ]);
    });
};
