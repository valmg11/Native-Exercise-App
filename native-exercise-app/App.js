import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

import Plank from './components/Plank';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
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
  let goToExercise = useCallback(({key}) => {
    navigation.navigate("Plank",  {exerciseKey: key, count: 0, exerciseList : exerciseList})
  })
  return (
      <View style={styles.container}>
        <FlatList data={exerciseList} renderItem={({item}) =>
          <Button onPress={() => goToExercise(item)} title={item.name}></Button>
        }/>
        <StatusBar style="auto" />
      </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Plank" component={Plank}/>
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
