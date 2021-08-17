/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import KotlinVideoStream from './KotlinVideoStream';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = ()=>{
  useEffect(()=>{
    KotlinVideoStream.playVideoStream(
  "lasssssssssssssssssssssm",
  "https://player.vimeo.com/external/148614367.hd.mp4?s=551ae2fc0254f99f43f0a6126b8e4d0666fba327&profile_id=113"
);
  },[])
  return (
    <>
    <View style={styles.container}>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'azure'
  }
});

export default App;
