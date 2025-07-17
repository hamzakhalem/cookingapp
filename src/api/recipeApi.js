// src/api/recipeApi.js
import axios from 'axios';
import { SPOONACULAR_API_KEY } from '../constants/config';

export const getRecipesByIngredients = async (ingredients = []) => {
  const query = ingredients.join(',');
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=5&apiKey=${SPOONACULAR_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};
