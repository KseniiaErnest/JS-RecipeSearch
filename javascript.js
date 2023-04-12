'use strict'

const inputField = document.querySelector('#inputname');
const recipeBoxes = document.querySelectorAll('.item-box');

inputField.addEventListener('keyup', (event) => {
const userInput = event.target.value.toLowerCase();

recipeBoxes.forEach(eachRecipe => {
eachRecipe.querySelector('p').textContent.toLowerCase().includes(userInput) ? eachRecipe.style.display = 'block' : eachRecipe.style.display = 'none';
})
})