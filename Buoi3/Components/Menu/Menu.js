import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import MenuLogin from './MenuLogin';
import Login from '../Login/Login';

export default class Menu extends Component {
 
    gotoScene(route, navigator){
        switch(route.mh){
            case 'menulogin':
                return(
                   <MenuLogin gotoLogin={()=>{
                    navigator.push({mh:'login'})
                    }}/> 
                
                );
                break;
            case 'login':
                return(
                    <Login />
                );
                break;
        }

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2aba99' }}>
              <Navigator 
                    initialRoute={{mh:'menulogin'}}
                    renderScene={this.gotoScene}
              />
            </View>
        );
    }
}