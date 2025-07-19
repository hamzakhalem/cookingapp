import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import IngredientSelector from '../components/IngredientSelector';
import { INGREDIENT_CATEGORIES } from '../data/ingredientsByCategory';
import LinearGradient from 'react-native-linear-gradient'; // Make sure you have this package installed
import I18n from '../i18n/i18n'; 

export default function HomeScreen({ navigation }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>{I18n.t(`select_ingredients`)}</Text>
      <IngredientSelector
        categories={INGREDIENT_CATEGORIES}
        selected={selectedIngredients}
        onToggle={toggleIngredient}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Recipes', { ingredients: selectedIngredients })
        }
        style={styles.buttonWrapper}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#ff9800', '#ff5722']}
          style={styles.gradientButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonText}>{I18n.t(`find_recipes`)}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#181A20', // dark background
    minHeight: '100%',
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // white text for dark mode
  },
  buttonWrapper: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
