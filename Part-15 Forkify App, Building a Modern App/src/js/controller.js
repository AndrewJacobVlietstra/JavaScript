import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // for polyfilling everything else
import 'regenerator-runtime/runtime'; // for polyfilling async/await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    // renders a loading spinner while fetching data
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);
    const {recipe} = model.state.recipe;

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);

  }
  
  // any errors that happen throughout the entire process will be caught here and logged to the console
  catch (err) {
    console.error(err);
  }
};

controlRecipes();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));