import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import profile from '../../Media/profile.png';

export default class MenuLogin extends Component {
  
    onLogin(){
        console.log("Login");
    }
    render() {
        return (
            <View style={styles.menuwapper}>
                <Image source={profile}  style={styles.improfile}/>
                <TouchableOpacity style={styles.bntLogin} onPress={()=>{this.props.gotoLogin()}}>
                <Text >SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuwapper:{
        alignItems:'center',
        marginTop:10,
    },
    improfile:{
        height:50,
        width:50,
        marginBottom: 10,
    },
    bntLogin:{
        padding: 10,
        borderRadius:20,
        width:150,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    }
});