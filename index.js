import {recipesArray} from "./recipes.js"



const recipeBox = recipesArray.map(function(recipe) {
    return `
    <div class="recipe-card">
        <div class="recipe-image">
            <img src="${recipe.image}" alt="">
        </div>
    <div class="recipe-text">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
    </div>
    `
}) 

document.getElementById("recipe-box").innerHTML = recipeBox