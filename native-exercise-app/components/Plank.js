import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

// const Stack = createNativeStackNavigator();

function Plank({route, navigation}) {
  let {exerciseList, exerciseKey} = route.params
   let goToExercise = useCallback(() => {
    navigation.push("Plank",  {exerciseKey: "2", exerciseList : exerciseList, count: route.params.count+1})
  })
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey)

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
    
    useEffect (() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);
    
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    //stops running and sets value to 0
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        let millisecs = Math.floor(elapsedTime % 1000 / 10);

        // add "0" padding to beginning
        mins = String(mins).padStart(2, "0");
        secs = String(secs).padStart(2, "0");
        millisecs = String(millisecs).padStart(2, "0");

        // display stopwatch
        return `${mins}:${secs}:${millisecs}`
      }

    return (
      <View style={styles.container}>
        <Text>{currentExercise.name} : {route.params.count}</Text>
        <Button onPress={goToExercise} title="Suggested Exercise:"></Button>
        <Text>{formatTime()}</Text>
        <Button title="start" onPress={start}></Button>
        <Button title="reset" onPress={reset}></Button>
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

export default Plank