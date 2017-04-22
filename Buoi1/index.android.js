/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,Navigator, Text} from 'react-native';
import MangHinhA from './Component/MangHinhA.js';
import MangHinhB from './Component/MangHinhB.js';
import MangHinhC from './Component/MangHinhC.js';

export default class Buoi1 extends Component {
  sendScene(route, navigator){
    switch (route.name) {
  
      case 'mhb':
          return (
            <MangHinhB
            gotoBack={()=>{
              navigator.pop();
             }}
            />
          );
        break;
        case 'mhc':
            return (
              <MangHinhC />
            );
          break;
        default:
          return (
            <MangHinhA
              gotoB={()=>{
                navigator.push({name:"mhb"});
              }}

              gotoC={()=>{
                navigator.push({name:"mhc"});
              }}
            />
          );
    }// End switch
  }

  render() {
    return (
        <Navigator
            initialRoute={{name:"mha"}}
            renderScene={this.sendScene}
        />
    );
  }
}

AppRegistry.registerComponent('Buoi1', () => Buoi1);
