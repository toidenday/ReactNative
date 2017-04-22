import React,{ Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class MangHinhA extends Component{

  render(){
    return(
      <View style={{flex:1, backgroundColor:'red'}}>
        <Text> Màng Hình A</Text>
        <TouchableOpacity style={{margin:10}}  onPress={()=>{this.props.gotoB()}}>
          <Text style={{margin:10, color:'#ff0'}}>Màng hình B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:10}}  onPress={()=>{this.props.gotoC()}}>
          <Text style={{margin:10, color:'#ff0'}}>Màng hình C</Text>
        </TouchableOpacity>
      </View>
    );
  }// End render

}// End Class MangHinhA
