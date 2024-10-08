import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Pressable, Text } from 'react-native';
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
            <Pressable
                style={[styles.button, { backgroundColor: 'green' }]}
                onPress={() => {
                    navigation.navigate('Friends');
                }}
            >
                <Text style={styles.buttonText}>Friends</Text>
            </Pressable>
            <Pressable
                style={[styles.button, { backgroundColor: 'blue' }]}
                onPress={() => {
                    navigation.navigate('Hobbies');
                }}>
                <Text style={styles.buttonText}> Hobbies </Text>
            </Pressable>
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
        flex: 2,
        padding: 20,
        fontSize: 20,
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        paddingTop: 100,
    },
    button: {
        padding: 100,
        backgroundColor: '#007BFF',
        borderRadius: 20,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 30,
    },
});
