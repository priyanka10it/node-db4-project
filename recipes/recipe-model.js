const db = require('../data/db-config.js');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('Recipes');
}

function getShoppingList(Recipe_id){
    return db('Recipe_Ingredients as RI')
    .where({'RI.Recipe_id':Recipe_id})
    .join("Ingredients as I","I.id","=","RI.Ingredient_id")
    .select("I.Ingredient_name","RI.Quantity")
}

function getInstructions(Recipe_id){
    return db('Steps')
    .where({Recipe_id})
    .select("Steps_num","Instructions")
}