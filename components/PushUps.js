import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

// const Stack = createNativeStackNavigator();

function PushUps({route, navigation}) {
  let {exerciseList, exerciseKey} = route.params
   let goToExercise = useCallback(() => {
    navigation.push("Plank",  {exerciseKey: "1", exerciseList})
  })
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey)

  const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{currentExercise.name}</Text>

        <Button onPress={goToExercise} title="Suggested: Plank"></Button>
        <Text style={styles.text}>{count}</Text>

        <View style={styles.buttons}>
          <Button title="Complete Rep" onPress={() => setCount(count + 1)}></Button>
        </View>
        <View style={styles.buttons}>
          <Button title="Reset" onPress={() => setCount(0)}></Button>
        </View>
        <View style={styles.homeButton}>
          <Button onPress={() => navigation.reset({
            key: "0",
            routes: [{name: "Home"}],
          })
          } title="Return"></Button>
        </View>
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
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
  },
  buttons: {
    marginBottom: 10,
  },
  homeButton: {
    marginTop: 25,
  }
});

export default PushUps