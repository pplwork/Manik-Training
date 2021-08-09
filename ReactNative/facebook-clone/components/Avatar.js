import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'

const Avatar = ({source}) => {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.Image}/>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        width : 40,
        height: 40,
        position: 'relative'
    },
    Image:{
        width: 40,
        height: 40,
        borderRadius: 20
    }
})
