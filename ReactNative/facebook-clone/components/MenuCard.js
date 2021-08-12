import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const MenuCard = ({source,text,notCount}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={source}/>
            <Text style={styles.text}>{text}</Text>
            {(notCount) ?<View style={{flexDirection:'row' , alignItems: 'center'}}>
                <View style={{height: 8 , width: 8 ,borderRadius:8, backgroundColor:'red'}}></View>
                <Text style={{marginLeft: 6 , fontSize: 12, color: '#8D949E'}}>{notCount} new</Text>
            </View>: null}
        </View>
    )
}

export default MenuCard

const styles = StyleSheet.create({
    container:{
        width: '45%',
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 10,
        elevation: 8,
        margin: 8,
        marginLeft: 11
    },
    img:{
        height: 30,
        width:30
    },
    text:{
        fontWeight: 'bold',
        fontSize : 16,
        textTransform: 'capitalize'
    }
})
