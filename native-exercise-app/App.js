import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

import HomeScreen from './components/Home';
import Plank from './components/Plank';
import PushUps from './components/PushUps';

const Stack = createNativeStackNavigator();

export default function App() {
  let exerciseList = [
    {
      name: "Plank",
      key: "1",
    },
    {
      name: "Push Ups",
      key: "2",
    }
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{exerciseList: exerciseList}}/>
        <Stack.Screen name="Plank" component={Plank} initialParams={{exerciseList: exerciseList}}/>
        <Stack.Screen name="Push Ups" component={PushUps} initialParams={{exerciseList: exerciseList}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtons: {
    color: "red",
    marginTop: 10,
  },
});
