import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function HobbyDetail({ navigation, route }: any) {
    
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: route.params.hobby.picture }}
                style={styles.image}
            />
            <Text style={styles.text}> {route.params.hobby.name} </Text>
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