import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать на страницу 2!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db', // Изменено на синий цвет
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Изменен размер текста на 24
    fontWeight: 'bold', // Изменено на жирный шрифт
    color: '#fff', // Изменен на белый цвет
  },
});
