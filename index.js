import {recipesArray} from "./recipes.js"

const newRecipeBtn = document.getElementById("new-recipe-btn") 
const newRecipeModal = document.getElementById("new-recipe-modal")
const modalExitBtn = document.getElementById("modal-exit-btn")

newRecipeBtn.addEventListener('click', function(){
    newRecipeModal.style.display='flex'
})

modalExitBtn.addEventListener('click', function(){
    newRecipeModal.style.display='none'
})


const recipeBox = recipesArray.map(function(recipe) {
    return `
    <section class="recipe-card">
        <div class="recipe-image">
            <img src="${recipe.image}" alt="">
        </div>
    <div class="recipe-text">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
    </section>
    `
}) 

document.getElementById("recipe-box").innerHTML = recipeBox