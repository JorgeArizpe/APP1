import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, Pressable, FlatList, StyleSheet, View, Text } from 'react-native'

const url = 'https://raw.githubusercontent.com/JorgeArizpe/APP1/master/assets/json/friends.json'

export default function Friends({ navigation }: any) {
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
        <View style={styles.container}>
            {
                data.length > 0 ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Pressable
                                    style={styles.button}
                                        onPress={() => {
                                            navigation.navigate('Friend', { friend: item });
                                        }}
                                    >
                                        <Text style={styles.buttonText}> {item['name']} </Text>
                                    </Pressable>
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

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
        fontSize: 20,
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        paddingTop: 60,
    },
    button: {
        padding: 75,
        backgroundColor: 'green',
        borderRadius: 20,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 30,
    },
});