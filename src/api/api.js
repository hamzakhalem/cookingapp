import axios from 'axios';

const API_KEY = '5a2a464f9df145108f6f735ae5f30097'; // Replace with your Spoonacular API key
const BASE_URL = 'https://api.spoonacular.com/recipes';

export async function fetchRecipesByIngredients(ingredients) {
  const ingredientList = ingredients.join(',');
  const url = `${BASE_URL}/findByIngredients?ingredients=${ingredientList}&number=5&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data; // returns array of recipes
  } catch (error) {
    console.error('API error:', error.message);
    return [];
  }
}
