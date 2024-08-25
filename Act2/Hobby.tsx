import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, Button, FlatList, Pressable, Text, View } from 'react-native'

const url = 'https://raw.githubusercontent.com/JorgeArizpe/APP1/master/assets/json/hobies.json'

export default function Hobby({ navigation }: any) {
    const [data, setData] = useState([]);

    async function request() {

        var response = await fetch(url);
        var json = await response.json();

        setData(json);
    }

    useEffect(() => {
        request();
    }, []);

    return (
        <View style={{ alignContent: 'center', padding: 30}}>
            {
                data.length > 0 ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Button 
                                    onPress={() => { navigation.navigate('Hobby', { hobby: item })}}
                                    title = {item['name']}
                                    >
                                    </Button>
                                </View>
                            )
                        }}
                    />
                    :
                    <ActivityIndicator size="large" />
            }
        </View>
    )
}
