import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import sp1  from '../../../../Media/sp1.jpeg';
export default class Topproduct extends Component {
    state = {  }
    render() {
        const {
            container,
            TitieText,
            ListProduct,
            spItem,
            imgItem
        } = styles;
        return (
            <View style={container}>

                {/*Tiêu đề */}
                <View>
                    <Text style={TitieText}>TOP PRODUCT</Text>
                </View>

                {/*List Sản phẩm*/}
                <View style={ListProduct}>
                    {/*Item Product*/}
                    <View style={spItem}>
                        <Image  source={sp1} style={imgItem}/>
                        <Text>TenSP</Text>
                        <Text>20.000</Text>
                    </View>

                    <View style={spItem}>
                        <Image  source={sp1} style={imgItem} />
                        <Text>TenSP</Text>
                        <Text>20.000</Text>
                    </View>
                    <View style={spItem}>
                        <Image  source={sp1} style={imgItem }/>
                        <Text>TenSP</Text>
                        <Text>20.000</Text>
                    </View>

                </View>
            </View>
        );// End return
    } // End render
}// End Class Topproduct
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10
    },
    TitieText:{
        marginBottom:5,
        fontSize: 15,
        color:'#c5c5c5'
    },
    imgItem:{
        width:150,
        height:150
    },
    spItem:{
        marginVertical:5,
       
    },
    ListProduct:{
        flexDirection:'row',
        flexWrap:'wrap',
    }
});