import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

export default class App extends Component {
    state = {}
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                openDrawerOffset={0.4}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{ flex: 1, backgroundColor: 'blue' }}>
                        <Text> Menu Drawer </Text>
                    </View>
                }
            >
                <View style={styles.wapper}>
                    <TouchableOpacity onPress={() => {this.openControlPanel()}} >
                        <Text style={styles.TextContent}>Content Drawer </Text>
                    </TouchableOpacity>
                </View>
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        flex: 1,
        backgroundColor: 'red',
    },
    TextContent: {
        color: '#FFF',
    }
});