import React from 'react'
import { Text, View, Image } from 'react-native'

export default function FriendsDetail({ navigation, route }: any) {
    
    return (
        <View>
            <Text> Friend: {route.params.friend.name} </Text>
            <Text> Age: {route.params.friend.age} </Text>
            <Image
                source={{ uri: route.params.friend.picture }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}
