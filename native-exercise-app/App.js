import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

import Plank from './components/Plank';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation, route}) {
  let exerciseList = route.params.exerciseList

  let goToExercise = useCallback(({key}) => {
    navigation.navigate("Plank",  {exerciseKey: key, count: 0})
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
