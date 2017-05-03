import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

import slider1 from '../../../../Media/midi.jpg';
import slider2 from '../../.././../Media/mini.jpg';

const { width } = Dimensions.get("window");
export default class Catrgory extends Component {

    render() {
        const { container, swiperImg,TitieText } = styles;
        return (
            <View style={container}>
                <View>
                    <Text style={TitieText}>LIST OF CATEGORY</Text>
                </View>
                <Swiper showsButtons={true}
                    width={wImg}
                    height={150}
                    autoplay={true}
                    autoplayTimeout={3.5}
                >
                    <View >
                        <Image source={slider1} style={swiperImg} />
                    </View>
                    <View >
                        <Image source={slider2} style={swiperImg} />
                    </View>
                </Swiper>
            </View>
        );
    }
}

const wImg = width - 40;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10
    },
    swiperImg: {
        width: wImg,
        height: 150
    },
    TitieText:{
        marginBottom:5,
        fontSize: 15,
        color:'#c5c5c5'
    },
});