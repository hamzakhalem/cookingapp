import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { INGREDIENT_ICONS } from '../data/ingredientIcons';

export default function IngredientItem({ name, selected, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => onToggle(name)}
      activeOpacity={0.85}
    >
      {selected ? (
        <LinearGradient
          colors={['#ff9800', '#ff5722']}
          style={styles.item}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {INGREDIENT_ICONS[name] && (
            <Image source={INGREDIENT_ICONS[name]} style={styles.icon} />
          )}
          <Text style={[styles.text, { color: '#fff', fontWeight: 'bold' }]}>{name}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.item}>
          {INGREDIENT_ICONS[name] && (
            <Image source={INGREDIENT_ICONS[name]} style={styles.icon} />
          )}
          <Text style={styles.text}>{name}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23242a', // dark background for unselected
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  text: {
    color: '#fff', // white text for dark mode
  },
});
