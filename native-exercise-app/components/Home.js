import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

function HomeScreen({navigation, route}) {
  let exerciseList = route.params.exerciseList

  let goToExercise = useCallback(({name, key}) => {
    navigation.navigate(name,  {exerciseKey: key, count: 0})
  })
  

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Exercise!</Text>
        <FlatList data={exerciseList} renderItem={({item}) =>
        <View style={styles.buttons}>
          <Button onPress={() => goToExercise(item)} title={item.name}></Button>
        </View>
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
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 270,
  },
  buttons: {
    marginBottom: 20,
  }
});

export default HomeScreen