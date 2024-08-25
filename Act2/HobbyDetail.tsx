import React from 'react'
import { Text, View, Image } from 'react-native'

export default function HobbyDetail({ navigation, route }: any) {
    
    return (
        <View style={{alignContent: 'space-evenly'}}>
            <Text> Hobby: {route.params.hobby.name} </Text>
            <Image
                source={{ uri: route.params.hobby.picture }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}
