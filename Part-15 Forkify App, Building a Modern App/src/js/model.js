import {async} from 'regenerator-runtime';

export const state = {
    recipe: {},
};

export const loadRecipe = async function(id) {
    try {
        const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
        // await the response object to convert to json
        const data = await res.json();
        
        // if response is not ok, throw a new error, throwing error will break us out of the function, similar to return
        if(!res.ok) throw new Error(`${data.message} (${res.status})`);
        
        // re-naming some properties of the recipe object
        const {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(state.recipe);
        }
    catch(err) {
        console.error(err);
    }
};