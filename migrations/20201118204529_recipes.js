
exports.up = function(knex,Promise) {
    return knex.schema
    .createTable('Recipes',tbl=>{
        tbl.increments();
        tbl.string('Recipe_name',128)
        .notNullable()
        .unique();
    })
  
    .createTable('Ingredients',tbl=>{
        tbl.increments();
        tbl.string('Ingredient_name', 128)
        .notNullable()
        .unique();
    })
  
    .createTable('Recipe_Ingredients',tbl=>{
        tbl.integer('Recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipes');
        tbl.integer('Ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Ingredients');
        tbl.float('Quantity').notNullable();
    })
   
    .createTable('Steps',tbl=>{
       // tbl.increments();
        tbl.integer('Recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipes');
        tbl.integer('Steps_num').unsigned()
        .notNullable().notUnique();
        tbl.text('Instructions',300)
        .notNullable();
    }) 

    
  };
  
  exports.down = function(knex,Promise) {
    return knex.schema
      .dropTableIfExists('Recipe_Ingredients')
      .dropTableIfExists('Steps')
      .dropTableIfExists('Recipes')
      .dropTableIfExists('Ingredients')
  };
  
