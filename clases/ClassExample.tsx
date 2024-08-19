import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class ClassExample extends Component<{name: string, lastName: string}, {count: number, nombre: string}> {

    constructor(props: any) {
        super(props);
        console.log("Constructor");

        this.state = { count: 0, nombre: this.props.name };
    }

    render() {
        console.log("render");
        return (
            <View>
                <Text> Component: {this.props.name}</Text>
                <Text>Anothe prop:  {this.props.lastName} </Text>
                <Text>Current count:  {this.state.count} </Text>
                <Button
                    title='Increment count'
                    onPress={() => {
                        this.setState((state) => {
                            return { count: state.count + 1 };
                        })
                    }}
                />
            </View>
        )
    }

    componentDidMount(): void {
        console.log("Component did mount");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Did update");
    }

    componentWillUnmount(): void {
        console.log("Did unmount");
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Did catch");
    }
}
