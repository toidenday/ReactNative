import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Navigator } from 'react-native';
import Drawer from 'react-native-drawer';
import Tabbar from './Tabbar/Tabbar';
import Header from './Headers/Header';
import MenuLogin from './Menu/MenuLogin';
import Login from './Login/Login';
export default class App extends Component {

    openControlPanel = () => {
        this._drawer.open()
    };

    gotoScene(route, navigator) {
        switch (route.mh) {
            case 'login':
                return (
                    <Login
                        onBack={() => {
                            navigator.pop()
                        }}

                    />
                );
                break;
            default:
                return (

                    // Menu Drawer 
                    <Drawer
                        type="overlay"
                        openDrawerOffset={0.4}
                        tapToClose={true}
                        ref={(ref) => this._drawer = ref}
                        content={
                            <View style={{ flex: 1, backgroundColor: '#2aba99' }}>
                                <MenuLogin
                                    gotoLogin={() => {
                                        navigator.push({ mh: 'login' })
                                    }}
                                />
                            </View>
                        }
                    >
                        {/*Header */}
                        <View style={{backgroundColor:'#e2dede',}}>
                            <Header openMenuDrawer={this.openControlPanel} />
                        </View>
                        {/*Tab Bar */}
                        <Tabbar />


                    </Drawer>
                );
        }

    }

    render() {
        return (
            <Navigator
                initialRoute={{ mh: 'main' }}
                renderScene={this.gotoScene.bind(this)}
            />
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