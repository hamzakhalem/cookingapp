// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetch resources, check auth, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.splashContainer}>
        <Image 
          source={require('./src/assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.splashText}>CookinApp</Text>
        <ActivityIndicator size="large" color="#ff9800" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={NavigationDarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#181A20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: 20,
  },
});
