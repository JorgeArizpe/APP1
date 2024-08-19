import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ClassExample from './clases/ClassExample';
import { Doggy, DoggyRow } from './clases/DoggyComponent';
import RequestClass from './clases/RequestClass';
import RequestFunction from './clases/RequestFunction';

let url = 'https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ClassExample name="Name" lastName = "Last name"/> */}
      {/* <Doggy name="dog" age= {10} /> */}
      <FlatList
        data={[
          { name: "Perro 1", uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" },
          // {name: "Perro 2", uri:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"},
          // {name: "Perro 3", uri:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"}
        ]}
        renderItem={({ item }) => {
          return <DoggyRow name={item.name} uri={item.uri} />
        }}
      />
      {/* <RequestClass url={url} /> */}
      <RequestFunction url={url}/>
      <StatusBar style="auto" />
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
});
