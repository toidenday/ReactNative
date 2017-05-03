import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';

import ic_menu from '../../Media/ic_menu.png';
import ic_logo from '../../Media/ic_logo.png';

const { height } = Dimensions.get("window");

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        const {
            container,
            iconheader,
            headertop,
            titleText,
            search
            } = styles;
        return (
            <View style={container}>
                <View style={headertop}>
                    <TouchableOpacity onPress={() => { this.props.openMenuDrawer() }}>
                        <Image source={ic_menu} style={iconheader} />
                    </TouchableOpacity>
                    <Text style={titleText}> Wearing a Dress </Text>
                    <Image source={ic_logo} style={iconheader} />
                </View>
                <TextInput
                style={search}
                    onChangeText={(search) => this.setState({ search })}
                    value={this.state.search}
                    placeholder='Search Product'
                    placeholderTextColor='#FFF'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2aba99',
        marginBottom: 15,
        padding: 10

    },
    iconheader: {
        height: 25,
        width: 25,
    },
    headertop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: '#FFF',
        fontSize: 1
    },
    search: {
        color: '#FFF'
    }
});