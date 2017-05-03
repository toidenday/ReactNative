import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class Loign extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            pass:'',
        }
    }
onDangNhap(){
    Alert.alert(
        'Thông Báo',
        'Thông tin đăng nhập của bạn được chấp nhận!',
        [
             {text: 'Tiếp Tục'},
             {text: 'Cancel'},
        ]
    );
    if(this.state.email === 'kha' && this.state.pass ==='123456'){
        this.props.onBack();
    }
}


    render() {
        const {
            titleDangNhap,
            rowBar,
            BarText,
            textInput,
            vLogin,
            btnDangNhap,
            viewBtn,
        } = styles;
        return (
            <View  style={{ flex: 1, backgroundColor: '#2aba99' }}> 
                <View style={rowBar}>
                    <TouchableOpacity onPress={() => {this.props.onBack()}}>
                        <Text style={BarText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View  style={vLogin}>
                    <Text style={titleDangNhap}> ĐĂNG NHẬP</Text>
                    <TextInput
                        style={textInput}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder='Địa chỉ Email...'
                        keyboardType="numeric"
                        placeholderTextColor="#FFFFFF"
                    />

                    <TextInput
                        style={textInput}
                        onChangeText={(pass) => this.setState({ pass })}
                        value={this.state.pass}
                        placeholder='Nhập vào mặt khẩu...'
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                    />
                    <View style={viewBtn}>
                        <TouchableOpacity style={btnDangNhap} onPress={()=>{this.onDangNhap()}}>
                                <Text style={titleDangNhap}>Đăng Nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowBar:{
        height:50,
        padding:10
    },
    BarText:{
        color:'#fff'
    },
    titleDangNhap:{
        textAlign: 'center'
    },
    textInput:{
        marginBottom:10,
        height:40,
        color:'#FFF'
    },
    vLogin:{
        padding:10,
    },
    btnDangNhap:{
        backgroundColor:'#FFF',
        borderRadius:20,
        width:150,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    },
    viewBtn:{
        alignItems:'center',

    }
});