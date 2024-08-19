import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class RequestClass extends Component<{ url: string }, { model: string }> {

    async request(url: string) {
        var response = await fetch(url);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);
        // this.state = {model: json[1].modelo}
    }

    constructor(props: any) {
        super(props);
        this.request(this.props.url);
        this.state = { model: "balls" };
    }

    render() {
        return (
            <View>
                <Text> Hey i'm a: {this.state.model} </Text>
            </View>
        )
    }
}
