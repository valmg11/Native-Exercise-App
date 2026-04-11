import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Plank from './components/Plank';
import PushUps from './components/PushUps';
import Running from './components/Running';
import SitUps from './components/SitUps';

const Stack = createNativeStackNavigator();

export default function App() {
  let exerciseList = [
    // duration
    {
      name: "Plank",
      key: "1",
    },
    {
      name: "Running",
      key: "2",
    },

    // repetition
    {
      name: "Push Ups",
      key: "3",
    },
    {
      name: "Sit Ups",
      key: "4",
    },
  ]
  return (
    // screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialParams={{exerciseList}}/>

        <Stack.Screen name="Plank" component={Plank} initialParams={{exerciseList}}/>
        <Stack.Screen name="Running" component={Running} initialParams={{exerciseList}}/>

        <Stack.Screen name="Push Ups" component={PushUps} initialParams={{exerciseList}}/>
        <Stack.Screen name="Sit Ups" component={SitUps} initialParams={{exerciseList}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
