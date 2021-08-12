import React from 'react'
import { ImageBackground, StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import {Entypo } from '@expo/vector-icons';
import Avatar from './Avatar';
const NotificationCard = ({source , imgSource , name , text , time , isSeen}) => {
    return (
        <View style={{...styles.reqContainer , alignItems :'center' , backgroundColor:(isSeen)?'#ffffff':'#ECF3FF'}}>
                    <View style={styles.ReqPhotoCon}>
                        <Avatar source={source} style={{height: 60 , width: 60 }}/>
                        <Image style={styles.ReqPhoto} source={imgSource}/>
                    </View>
                    <View style={styles.ReqTextContainer}>
                        <Text style={{fontSize: 16, width: '85%'}}><Text style={{fontWeight: 'bold'}}>{name}</Text> {text}</Text>
                        <Text style={{fontSize: 13, color: '#65676B' , paddingVertical: 2}}>{time}</Text>
                        
                    <Entypo style={styles.Dots} name="dots-three-horizontal" size={20} color="black" />
                    </View>
            </View>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    reqContainer:{
        padding: 11,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor:"#ECF3FF"
    },
    ReqPhotoCon:{
        position: 'relative',
        
    },
    ReqPhoto: {
        height: 28,
        width: 28,
        position: 'absolute',
        bottom: 0,
        right: -5
    },
    ReqTextContainer:{
        flex: 1,
        paddingLeft: 11,
        justifyContent: 'center'
    },
    Dots:{
        position:'absolute',
        right: 5,
        top :0
    }
})
