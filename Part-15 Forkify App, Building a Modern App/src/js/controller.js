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

const showRecipe = async function() {
  try {
    // await the response object to return
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
      // `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
      );
    // await the response object to convert to json
    const data = await res.json();

    // if response is not ok, throw a new error, throwing error will break us out of the function, similar to return
    if(!res.ok) throw new Error(`${data.message} (${res.status})`);

    // re-naming some properties of the recipe object
    let {recipe} = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log(recipe);
  } 
  
  // any errors that happen throughout the entire process will be caught here and logged to the console
  catch (err) {
    console.error(err);
  }
};

showRecipe();