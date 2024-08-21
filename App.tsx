import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, Button } from 'react-native';
import ClassExample from './clases/ClassExample';
import { Doggy, DoggyRow } from './clases/DoggyComponent';
import RequestClass from './clases/RequestClass';
import RequestFunction from './clases/RequestFunction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// let url = 'https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json'

const stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ClassExample name="Name" lastName = "Last name"/> */}
      {/* <Doggy name="dog" age= {10} /> */}
      <FlatList
        data={[
          { name: "Perro 1", uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" },
        ]}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => {
              alert("Row pressed")
            }}>
              <DoggyRow name={item.name} uri={item.uri} />
            </Pressable>
          )
        }}
      />
      {/* <RequestClass url={url} /> */}
      {/* <RequestFunction url={url} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

function NavRoot({ navigation }: any) {

  return (
    <View style={styles.container} >
      <Text style={{height:30, backgroundColor: 'white', flex:1}}>Nav Root page</Text>
      <Text style={{height:30, backgroundColor: 'blue', flex:2}}>Another text for styling reasons</Text>
      <Text style={{height:30, backgroundColor: 'pink', flex:3}}>Yet another text to modify in horrific ways</Text>
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

export default function navigation() {
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
