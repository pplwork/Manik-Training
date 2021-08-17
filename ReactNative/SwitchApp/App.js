import React,{Component} from 'react';
import {StyleSheet, View, requireNativeComponent , Alert} from 'react-native';
const Switch = requireNativeComponent('Switch');
import { RNCamera } from 'react-native-camera';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
         style={{flex: 1 , alignItems: 'center'}}
         ref={ref=>{
           this.camera  =ref
         }}
        />
        {/* <Switch style={styles.javaBtn} isTurnedOn={true} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  javaBtn: {
    height: 100,
    width: 300,
    backgroundColor: 'yellow',
  },
});