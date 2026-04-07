import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';

const Stack = createNativeStackNavigator();
let title = ["Exercise!", "Plank", "Running", "Push Ups", "Sit Ups", "Leg Press", "Chest Press"];

function RepetitionExerciseScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Repetition Exercise</Text>
        <StatusBar style="auto" />
      </View>
  )
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
