import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef } from 'react';

const Stack = createNativeStackNavigator();

function RepetitionExerciseScreen({route, navigation}) {
   let goToExercise = useCallback(() => {
    navigation.push("RepetitionExercise",  {name: "Push Ups", count: route.params.count+1})
  })

    return (
      <View style={styles.container}>
        <Text>{route.params.name} : {route.params.count}</Text>
        <Button onPress={goToExercise} title="Go to Screen"></Button>
        <Button onPress={() => navigation.navigate("Home")} title="Return"></Button>
        <StatusBar style="auto" />
      </View>
    );
}

function HomeScreen({navigation}) {
  let exerciseList = [
    {
      name: "Ex1",
      key: "1",
    },
    {
      name: "Ex2",
      key: "2",
    }
  ]
  let goToExercise = useCallback(({name}) => {
    navigation.navigate("RepetitionExercise",  {name: name, count: 0})
  })
  return (
      <View style={styles.container}>
        <FlatList data={exerciseList} renderItem={({item}) =>
          <Button onPress={() => goToExercise(item)} title={item.name}></Button>

        }/>
        {/* <Text>{title[0]}</Text> */}
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
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtons: {
    color: "red",
    marginTop: 10,
  },
});
