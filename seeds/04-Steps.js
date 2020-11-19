
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {Recipe_id: 1, Steps_num: 1 , Instructions:"Boil Pasta"},
        {Recipe_id: 1, Steps_num: 2 ,  Instructions:"Preapre white sauce"},
        {Recipe_id: 2, Steps_num: 3 , Instructions:"Add Marinara Sauce and Cheese"},
        {Recipe_id: 2, Steps_num: 4 , Instructions:"Bake at 450F"},
        {Recipe_id: 1, Steps_num: 5 ,  Instructions:"Add Pasta and Cheese"},
        {Recipe_id: 3, Steps_num: 6 ,  Instructions:"Mix Flour,egg,baking powder,baking soda,sugar"},
        {Recipe_id: 3, Steps_num: 7 ,  Instructions:"Bake at 355F"},
        {Recipe_id: 4, Steps_num: 8 , Instructions:"Mix Flour,Sugar,butter, baking powder, baking soda"},
        {Recipe_id: 4, Steps_num: 9 , Instructions:"Bake at 450F"} 
        
      ]);
    });
};
