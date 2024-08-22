import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

function NavRoot({ navigation }: any) {

  return (
    <View style={styles.container} >
      <Button
        title="Navigate"
        onPress={() => { 
          navigation.navigate("Example", {data: "Data"})
        }}
      />
    </View>
  )
}

function NavExample({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <Text>Nav example page</Text>
      <Text>{route.params.data}</Text>
    </View>
  )
}

function navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Root" component={NavRoot} />
        <stack.Screen name="Example" component={NavExample} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
  },
});
