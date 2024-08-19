import React, { useState } from 'react'
import { Button, Text, TextInput, View, Image } from 'react-native'

export function Doggy(props: any) {

    const [isHappy, setIsHappy] = useState(false);
    const [count, setCount] = useState(0);
    const [testInput, setTestInput] = useState("");

    return (
        <View>
            <Text>Woof. {props.name} {props.age} im {isHappy ? "Happy!" : "Sad D:"}</Text>
            <Button
                title='Change happiness'
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button
                title='Woff.'
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <TextInput
                placeholder='Text input'
                onChangeText={text => {
                    setTestInput(text);
                }}
            />
        </View>
    )
}

export function DoggyRow(props: any) {

    return (
        <View>
            <Text>My name is {props.name}</Text>
            <Image
                source={{ uri: props.uri }}
                style={{ width: 100, height: 100 }}
            />
        </View>
    )
}