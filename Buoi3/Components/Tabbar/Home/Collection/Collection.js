import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import banner from '../../../../Media/banner.jpg';

const {width} = Dimensions.get("window");
export default class Collection extends Component {
    state = {}
    render() {
        const { container,imgbanner,TitieText } = styles;
        return (
            <View style={container}>
                <Text style={TitieText}> SPRING COLLECTION </Text>
                <Image source={banner} style={imgbanner} />
            </View>
        );
    }
}
const imgWidth = width - 40;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding:10
    },
    imgbanner:{
        height:150,
        width:imgWidth,
    },
    TitieText:{
        marginBottom:5,
        fontSize: 15,
        color:'#c5c5c5'
    }
});