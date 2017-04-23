import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text> Menu Drawer </Text>
            </View>
        );
    }
}