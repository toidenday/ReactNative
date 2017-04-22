import React,{ Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

export default class MangHinhA extends Component{

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#ff0'}}>
        <Text> Màng Hình B</Text>

        <TouchableOpacity onPress={()=>{this.props.gotoBack()}}>
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
    );
  }// End render

}// End Class MangHinhA
