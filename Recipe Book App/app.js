'use strict'

const API_KEY = "00cbabc2701240138cf3d2d26c26e9a1";
async function getRecipe(){
    const response= await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data =await response.json();
    return data.recipes;

}


async function init(){
    const recipes =await getRecipe();
    console.log(recipes);
    
}
init();