import React, { Component } from 'react';
import {Text,View,StyleSheet,ListView,RefreshControl,Image,TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
          trang:0,
          refreshing: false,
          responseJsonNew:[],
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        }
  }
  onLoad(){
    this.setState({
     refreshing:true
   });
    console.log(this.state.trang);
    fetch("https://trinhsaothao-toidenday113.c9users.io/webservices/demo1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        refreshing:false,
        responseJsonNew: responseJson.concat(this.state.responseJsonNew),
        dataSource: this.state.dataSource.cloneWithRows(this.state.responseJsonNew),
        trang:this.state.trang+1,
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }// End on load

  AlertBox(id){

    console.log(id);
  }

  render() {
    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing = {this.state.refreshing}
            onRefresh = {this.onLoad.bind(this)}
          />
        }

        dataSource={this.state.dataSource}
        renderRow= {(r)=>

          <View style={styles.itemView}>
            <TouchableOpacity  onPress={()=>{this.AlertBox(r.Id) } }>
                <Image source={{uri:r.Hinh}} style={styles.itemImages} />
                <Text>{r.Ten}</Text>
                <Text>{r.Id}</Text>
            </TouchableOpacity>
          </View>

        }
      />
    );
  }// End render


  componentDidMount(){
    fetch("https://trinhsaothao-toidenday113.c9users.io/webservices/demo1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        trang:this.state.trang + 1,
        responseJsonNew: responseJson,
        dataSource: this.state.dataSource.cloneWithRows(responseJson),

      });
    })
    .catch((error)=>{
      console.log(error);
  });
}//End componentDidMount

}// End Class App
const styles = StyleSheet.create({
  itemImages:{
    width:150,
    height:100,
  },
  itemView:{
    shadowColor: 'red',
    shadowOpacity: 1.0,
    margin:2,
    borderWidth:1,
     padding:5
  }

});
