import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DoctorScreen() {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [timerHistory, setTimerHistory] = useState([]);

  useEffect(() => {
    if (timerId) {
      return () => clearInterval(timerId);
    }
  }, [timerId]);

  const startTimer = () => {
    setTimerId(setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000));
  };

  const stopTimer = () => {
    clearInterval(timerId);
    const newTimerRecord = { time: seconds };
    setTimerHistory(prevHistory => [...prevHistory, newTimerRecord]);
    setSeconds(0);
    setTimerId(null);
  };

  const pauseTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const clearHistory = () => {
    setTimerHistory([]);
  };

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главная</Text>
      <View style={styles.buttonContainer}>
        <Button title="Страница 1" onPress={() => navigateToPage('Doc')} color="#8A2BE2" />
        <Button title="Страница 2" onPress={() => navigateToPage('Doc2')} color="#8A2BE2" />
        <Button title="Страница 3" onPress={() => navigateToPage('Doc3')} color="#8A2BE2" />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Старт" onPress={startTimer} color="#27ae60" />
        <Button title="Пауза" onPress={pauseTimer} color="#e67e22" />
        <Button title="Стоп" onPress={stopTimer} color="#c0392b" />
      </View>
      <FlatList
        style={styles.historyContainer}
        data={timerHistory}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>
            Засекали: {formatTime(item.time)}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Очистить историю"
        onPress={clearHistory}
        color="#8A2BE2"
      />
    </View>
  );
}

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  historyContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});
