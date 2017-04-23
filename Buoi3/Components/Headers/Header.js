import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Header extends Component {
    state = {}
    render() {
        return (
            <View style={{ height: 35 }}>
                <TouchableOpacity onPress={() => { this.props.openMenuDrawer() }} >
                    <Text style={{color:'red'}}>Content Drawer </Text>
                </TouchableOpacity>
                <Text> Header </Text>
            </View>
        );
    }
}