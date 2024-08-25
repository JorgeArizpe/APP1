import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Friends from './Act2/Friends';
import FriendsDetail from './Act2/FriendsDetail';
import Hobby from './Act2/Hobby';
import HobbyDetail from './Act2/HobbyDetail';


const stack = createNativeStackNavigator();

function App({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
      title='Friends'
      onPress={() => {
        navigation.navigate('Friends')
      }}
      />
      <Button
      title='Hobbies'
      onPress={() => {
        navigation.navigate('Hobbies')
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={App} />
        <stack.Screen name="Friends" component={Friends} />
        <stack.Screen name="Friend" component={FriendsDetail} />
        <stack.Screen name="Hobbies" component={Hobby} />
        <stack.Screen name="Hobby" component={HobbyDetail} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
