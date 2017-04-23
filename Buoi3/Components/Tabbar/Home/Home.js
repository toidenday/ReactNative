import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Home extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text> Home View </Text>
            </View>
        );
    }
}