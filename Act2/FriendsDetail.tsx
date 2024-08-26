import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function FriendsDetail({ navigation, route }: any) {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: route.params.friend.picture }}
                style={styles.image}
            />
            <Text style={styles.text}> {route.params.friend.name}, {route.params.friend.age} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'lightblue',
    },
    image:{
        width: 300, 
        height: 300, 
        borderRadius: 60, 
        marginBottom: 20
    }
});