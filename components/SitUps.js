import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCallback, useState } from 'react';

// const Stack = createNativeStackNavigator();

function SitUps({route, navigation}) {
  let {exerciseList, exerciseKey} = route.params
   let goToExercise = useCallback(() => {
    // add suggested exercise screen
    navigation.push("Plank",  {exerciseKey: "1", exerciseList})
  })
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey)

  // counter from exercise app
  const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{currentExercise.name}</Text>

        <Button onPress={goToExercise} title="Suggested: Plank" color="#4e92d3"></Button>
        <Text style={styles.text}>{count}</Text>

        <View style={styles.buttons}>
            <Button title="Complete Rep" onPress={() => setCount(count + 1)} color="#4e92d3"></Button>
        </View>
        <View style={styles.buttons}>
            <Button title="Reset" onPress={() => setCount(0)} color="#4e92d3"></Button>
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

export default SitUps