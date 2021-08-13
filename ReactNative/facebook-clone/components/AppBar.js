import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity , Image, Animated} from 'react-native'
import {useFonts} from 'expo-font';
import {AppLoading} from 'expo';
import {Feather , MaterialCommunityIcons} from '@expo/vector-icons'
const AppBar = (props) => {
    const [isLoaded] = useFonts({
    klavikaBold : require("../assets/fonts/KlavikaBoldBold.otf"),
    random: require('../assets/fonts/StyleScript-Regular.ttf')
    });
    if(!isLoaded){
        return null;
    } else{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>facebook</Text>
            <View style={styles.RightBtn}>
                <TouchableOpacity style={styles.button}>
                    <Feather name="search" size={25} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="facebook-messenger" size={25} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
}

export default AppBar

const styles = StyleSheet.create({
    container:{
        width: '105%',
        height: 58,
        paddingHorizontal: 11,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: -10,
        borderWidth: 0,
    },
    text: {
        color: '#097DEB',
        fontSize:35,
        fontFamily: "klavikaBold",
        letterSpacing: -0.3,
    },
    RightBtn:{
        flexDirection: 'row',
        marginRight: 30
    },
    button:{
        width: 40,
        height: 40,
        borderRadius: 21,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12
    },
})
