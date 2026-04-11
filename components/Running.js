import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';

function Running({route, navigation}) {
  let {exerciseList, exerciseKey} = route.params;
   let goToExercise = useCallback(() => {
    // add suggested exercise screen
    navigation.push("Sit Ups",  {exerciseKey: "4", exerciseList});
  })
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey);

  // stopwatch
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

    // stops
    function stop() {
        setIsRunning(false);
    }

    //resets to 0
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
        <Text style={styles.header}>{currentExercise.name}</Text>

        {/* suggested exercise */}
        <Button onPress={goToExercise} title="Suggested: Sit Ups" color="#4e92d3"></Button>
        <Text style={styles.text}>{formatTime()}</Text>

        {/* stopwatch */}
        <View style={styles.buttons}>
          <Button title="start" onPress={start} color="#4e92d3"></Button>
        </View>
        <View style={styles.buttons}>
          <Button title="stop" onPress={stop} color="#4e92d3"></Button>
        </View>
        <View style={styles.buttons}>
          <Button title="reset" onPress={reset} color="#4e92d3"></Button>
        </View>

        {/* home button */}
        <View style={styles.homeButton}>
            <Button onPress={() => navigation.reset({
            key: "0",
            routes: [{name: "Home"}],
            })
            } title="Home" color="#092C56"></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9CBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontFamily: "Verdana",
    color: "#092C56",
    marginBottom: 20,
  },
  text: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    color: "#092C56",
    fontFamily: "Verdana",
  },
  buttons: {
    marginBottom: 10,
  },
  homeButton: {
    marginTop: 25,
  }
});

export default Running