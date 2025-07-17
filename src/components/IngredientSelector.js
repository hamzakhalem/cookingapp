import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import IngredientItem from './IngredientItem';
import I18n from '../i18n/i18n'; // <-- Import i18n

export default function IngredientSelector({ categories, selected, onToggle }) {
  const [search, setSearch] = useState('');

  const matchesSearch = (ingredient) =>
    I18n.t(`ingredients.${ingredient}`).toLowerCase().includes(search.toLowerCase());

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder={I18n.t('search_placeholder') || "Search ingredients..."}
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />
      {Object.entries(categories).map(([category, ingredients]) => {
        const filtered = ingredients.filter(matchesSearch);
        if (filtered.length === 0) return null;

        return (
          <View key={category} style={styles.category}>
            <Text style={styles.categoryTitle}>
              {I18n.t(`categories.${category}`) || category}
            </Text>
            <View style={styles.grid}>
              {filtered.map((ingredient) => (
                <IngredientItem
                  key={ingredient}
                  name={I18n.t(`ingredients.${ingredient}`) || ingredient}
                  selected={selected.includes(ingredient)}
                  onToggle={onToggle}
                  originalName={ingredient} // Pass original name if needed
                />
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181A20', // dark background
    borderRadius: 12,
    padding: 10,
  },
  search: {
    backgroundColor: '#23242a', // darker search bar
    color: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#fff', // white text for dark mode
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
