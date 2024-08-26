import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, FlatList, Pressable, Text, View } from 'react-native'

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
                                            navigation.navigate('Hobby', { hobby: item })
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
        marginTop: 20,
        padding: 50,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});