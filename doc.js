import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Calendar } from 'react-native-calendars'; // Импорт компонента календаря

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать на страницу 2!</Text>
      <Calendar // Добавление компонента календаря
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        theme={{
          // Настройка внешнего вида календаря
          backgroundColor: '#ffffff', // Белый цвет фона
          calendarBackground: '#3498db', // Синий цвет календаря
          textSectionTitleColor: '#b6c1cd', // Цвет заголовков разделов (недели, месяцы)
          selectedDayBackgroundColor: '#00adf5', // Цвет выбранного дня
          selectedDayTextColor: '#ffffff', // Цвет текста выбранного дня
          todayTextColor: '#00adf5', // Цвет сегодняшней даты
          dayTextColor: '#2d4150', // Цвет текста дня
          textDisabledColor: '#d9e1e8', // Цвет текста неактивных дней
          dotColor: '#00adf5', // Цвет точек (для маркеров событий)
          selectedDotColor: '#ffffff', // Цвет выбранных точек
          arrowColor: 'orange', // Цвет стрелок для выбора месяца
          monthTextColor: 'blue', // Цвет текста месяца
          textDayFontFamily: 'monospace', // Шрифт текста дня
          textMonthFontFamily: 'monospace', // Шрифт текста месяца
          textDayHeaderFontFamily: 'monospace', // Шрифт текста заголовка дня
          textDayFontWeight: '300', // Насыщенность текста дня
          textMonthFontWeight: 'bold', // Насыщенность текста месяца
          textDayHeaderFontWeight: '300', // Насыщенность текста заголовка дня
          textDayFontSize: 16, // Размер шрифта текста дня
          textMonthFontSize: 16, // Размер шрифта текста месяца
          textDayHeaderFontSize: 16, // Размер шрифта текста заголовка дня
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
