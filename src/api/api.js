import axios from 'axios';

import { SPOONACULAR_API_KEY as API_KEY } from '../constants/config';
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
