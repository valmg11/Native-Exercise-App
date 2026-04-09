import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

// const Stack = createNativeStackNavigator();

function PushUps({route, navigation}) {
  let {exerciseList, exerciseKey} = route.params
   let goToExercise = useCallback(() => {
    navigation.push("PushUps",  {exerciseKey: "2", exerciseList : exerciseList, count: route.params.count+1})
  })
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey)

  const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <Text>{currentExercise.name} : {route.params.count}</Text>
        <Button onPress={goToExercise} title="Suggested: Plank"></Button>
        <Text>{count}</Text>
        <Button title="Complete Rep" onPress={() => setCount(count + 1)}></Button>
        <Button title="Reset" onPress={() => setCount(0)}></Button>
        <Button onPress={() => navigation.reset({
          key: "0",
          routes: [{name: "Home"}],
        })
        } title="Return"></Button>


        <StatusBar style="auto" />
      </View>
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

export default PushUps