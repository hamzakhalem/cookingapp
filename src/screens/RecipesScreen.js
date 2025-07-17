// src/screens/RecipesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getRecipesByIngredients } from '../api/recipeApi';

export default function RecipesScreen({ route }) {
  const { ingredients } = route.params;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipesByIngredients(ingredients).then(setRecipes).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#181A20', // dark background
  },
  recipeCard: {
    marginBottom: 20,
    backgroundColor: '#23242a', // card background for dark mode
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff', // white text for dark mode
  },
});
