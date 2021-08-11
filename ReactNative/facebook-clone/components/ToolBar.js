import React from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'
import Avatar from './Avatar';

import {Ionicons , MaterialIcons , MaterialCommunityIcons} from  '@expo/vector-icons'

const ToolBar = (props) => {
    return (
        <>
        <View style={{...styles.container , ...props.style}}>
            <View style={{...styles.row , height: 80}}>
                <Avatar source={require('../assets/user1.jpg')}/>
                <TextInput style={styles.Input} placeholder={"What's on your mind?\nयहाँ कुछ लिखो..."} placeholderTextColor="black"/>
            </View>
            <View style={styles.Divider}/>
            <View style={styles.row}>
                <View style={styles.Menu}>
                    <Ionicons
                    name="ios-videocam"
                    size={22}
                    color= "#F44337"
                    />
                    <Text style={styles.MenuText}>Live</Text>
                </View>
                <View style={styles.Separator}/>
                <View style={styles.Menu}>
                    <MaterialIcons
                    name="photo-size-select-actual"
                    size={20}
                    color="#4CAF50"
                    />
                    <Text style={styles.MenuText}>Photo</Text>
                </View>
                <View style={styles.Separator}/>
                <View style={styles.Menu}>
                    <MaterialCommunityIcons
                    name="video-plus"
                    size={22}
                    color="#E141FC"
                    />
                    <Text style={styles.MenuText}>Room</Text>
                </View>
            </View>
        </View>
        <View style={styles.bottomDivider}/>
        </> 
    )
}

export default ToolBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: 120,
        backgroundColor: '#fff'
    },
    row:{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        paddingVertical: 0,
        paddingHorizontal: 11,
        alignItems: 'center'
    },
    Input:{
        width: '85%',
        height: 60,
        borderWidth:1,
        borderColor: '#BEC3C9',
        borderRadius: 100,
        marginHorizontal: 11,
        paddingHorizontal: 15,
    },
    Divider:{
        height: 0.5,
        width: '100%',
        backgroundColor: "#8D949E"  
    },
    Menu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42 
    },
    MenuText:{
        paddingLeft: 11,
        fontWeight: "500",
        fontSize : 12
    },
    Separator: {
        width: 0.5,
        height: 26,
        backgroundColor:"#8D949E"
    },
    bottomDivider: {
        width: '100%',
        height: 11,
        backgroundColor: '#CCD0D5' 
    }
})
