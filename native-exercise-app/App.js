import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef } from 'react';

const Stack = createNativeStackNavigator();
let title = ["Exercise!", "Plank", "Running", "Push Ups", "Sit Ups", "Leg Press", "Chest Press"];

function RepetitionExerciseScreen({ navigation }) {
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
      <View>
        <Text>{formatTime()}</Text>
        <Button title="Start" onPress={start}></Button>
  
          {/* reset/stop button */}
          <Button title="Reset" onPress={reset}></Button>
  
          {/* return button */}
          <Button title="Return"></Button>
      </View>
    );
  
  // return (
  //   <View style={styles.container}>
  //       <Text>Repetition Exercise</Text>

  //       <Button title="Start"></Button>

  //       <Button title="Reset"></Button>

  //       <Button title="Return"></Button>


  //       <StatusBar style="auto" />
  //     </View>
  // )
}

function HomeScreen({navigation}) {
  let goToExercise = useCallback(() => {
    navigation.navigate("RepetitionExercise")
  })
  return (
      <View style={styles.container}>
        <Text>{title[0]}</Text>
        <Button onPress={goToExercise} title={title[1]}></Button>
        <StatusBar style="auto" />
      </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="RepetitionExercise" component={RepetitionExerciseScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtons: {
    color: "red",
    marginTop: 10,
  },
});
