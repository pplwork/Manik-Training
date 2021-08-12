import { StatusBar } from 'react-native';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View ,Button ,Image} from 'react-native';
import AppBar from './components/AppBar';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator ,  } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './components/HomeScreen';
import MyProfile from './components/MyProfile';
import Watch from './components/Watch';
import Menu from './components/Menu';
import Notifications from './components/Notifications';
const Settings =(props)=>{
  const isFocused = useIsFocused();
  useEffect(()=>{
      if(isFocused)
    props.StackNavigation.setOptions({
      headerShown: false,
    })
  });
  return <View style={{backgroundColor: 'white'}}><Text>HEllo</Text></View>
}
const Random =(props)=>{
  const isFocused = useIsFocused();
  useEffect(()=>{
  if(isFocused)
    props.StackNavigation.setOptions({
      headerShown: true
    })
  });
  return <View><Text>HEllo</Text></View>
}
const Tab = createMaterialTopTabNavigator();
function HomeScreenNavigator({ navigation }) {
  return (
    <Tab.Navigator initialRouteName="Home"  screenOptions={({route})=>({
      tabBarLabelStyle:{fontSize: 0} ,
      tabBarShowLabel: false,
      tabBarIconStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
      },
      tabBarIcon:({focused})=>{
        switch(route.name){
          case "Home":
            return focused ? (<Image source={require('./assets/homeFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/home.png')} style={styles.ImageStyle}/>);
          case "Watch":
            return focused ? (<Image source={require('./assets/WatchFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/Watch.png')} style={styles.ImageStyle}/>);
          case "Groups":
            return focused ? (<Image source={require('./assets/GroupFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/Group.png')} style={styles.ImageStyle}/>);
          case "Marketplace":
            return focused ? (<Image source={require('./assets/marketplaceFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/marketplace.png')} style={styles.ImageStyle}/>);
          case "Notifications":
            return focused ? (<Image source={require('./assets/bellFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/bell.png')} style={styles.ImageStyle}/>);
          case "Menu":
            return focused ? (<Image source={require('./assets/hamburgerFocused.png')} style={styles.ImageStyle}/>): (<Image source={require('./assets/hamburger.png')} style={styles.ImageStyle}/>);
        }
      },
      tabBarStyle: {
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0.3,
        borderBottomColor: '#8D949E',
        marginTop: -5
      }
    })}>
      <Tab.Screen name="Home" >{(props)=> <HomeScreen {...props} StackNavigation = {navigation}/>}</Tab.Screen>
      <Tab.Screen name="Watch" >{(props)=><Watch {...props} StackNavigation = {navigation}/>}</Tab.Screen>
      <Tab.Screen name="Groups" >{(props)=><MyProfile {...props} StackNavigation = {navigation}/>}</Tab.Screen>
      {/* <Tab.Screen name="Marketplace" >{(props)=><Settings {...props} StackNavigation = {navigation}/>}</Tab.Screen> */}
      <Tab.Screen name="Notifications" >{(props)=><Notifications {...props} StackNavigation = {navigation}/>}</Tab.Screen>
      <Tab.Screen name="Menu" >{(props)=><Menu {...props} StackNavigation = {navigation}/>}</Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
    <View style={styles.container}>
      {/* <AppBar/> */}
      <NavigationContainer >
      <Stack.Navigator initialRouteName="facebook"  >
        <Stack.Screen name="facebook" component={HomeScreenNavigator} 
        options={{ headerTitle: props=> <AppBar/>,headerShadowVisible:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageStyle:{
    height: 27,
    width: 27
  }
});
