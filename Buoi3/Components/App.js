import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Tabbar from './Tabbar/Tabbar';
import Header from './Headers/Header';
import Menu from './Menu/Menu';
export default class App extends Component {

    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            // Menu Drawer 
            <Drawer
                type="overlay"
                openDrawerOffset={0.4}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={
                    <Menu />
                }
            >
                {/*Header */}
                <Header openMenuDrawer={this.openControlPanel} />
                {/*Tab Bar */}
                <Tabbar />

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
        color: 'red',
    }
});