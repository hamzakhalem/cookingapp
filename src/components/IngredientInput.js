// src/components/IngredientInput.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function IngredientInput({ value, onChangeText, onAdd }) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredient"
        value={value}
        onChangeText={onChangeText}
      />
      <Button title="Add" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: { flexDirection: 'row', marginBottom: 15 },
  input: { flex: 1, borderBottomWidth: 1, marginRight: 10 }
});
