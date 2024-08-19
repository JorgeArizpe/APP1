import React, { Component, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

export default function RequestFunction(props: any) {

    const [data, setData] = useState([]);

    async function request() {

        var response = await fetch(props.url);
        var json = await response.json();
        console.log("test");


        // setData({ brand: json[0]['marca'] });
        setData(json);
    }

    useEffect(() => {
        request();
    }, []);

    return (
        <View>
            {
                data.length > 0 ?
                    <FlatList
                        data = {data}
                        renderItem={({item}) => {
                            return(
                            <View>
                                <Text>{item['anio']}</Text>
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
