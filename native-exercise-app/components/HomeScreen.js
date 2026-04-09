import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

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

export default HomeScreen