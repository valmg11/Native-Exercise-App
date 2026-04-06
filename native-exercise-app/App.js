import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let title = ["Exercise!", "Plank", "Running", "Push Ups", "Sit Ups", "Leg Press", "Chest Press"];
  return (
    <View style={styles.container}>
      <Text>{title[0]}</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Button 
        color="red"
        // style={styles.homeButtons}
        title={title[1]}/>
        <Button 
        margin
        style={styles.homeButtons}
        title={title[2]}/>

        <Button 
        margin
        style={styles.homeButtons}
        title={title[3]}/>
        <Button 
        margin
        style={styles.homeButtons}
        title={title[4]}/>

        <Button 
        margin
        style={styles.homeButtons}
        title={title[5]}/>
        <Button 
        margin
        style={styles.homeButtons}
        title={title[6]}/>
      </View>

    </View>
    
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
