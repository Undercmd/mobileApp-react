import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavBar } from './src/NavBar';
import { PizzaTranslator } from './src/dfdf';

export default function App() {

  return (
    <View style={styles.container}>
      <NavBar title='Деление чисел' />
      <View style={styles.src}>
        <Text>Пустые поля по умолчанию = 0</Text>
        <PizzaTranslator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD'
  },
  src: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
