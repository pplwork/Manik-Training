import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const FriendCard = ({source , name}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={source} />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default FriendCard

const styles = StyleSheet.create({
    container:{
        width: '31.5%',
        marginBottom: 13
    },
    img:{
        width: '100%',
        height: 112,
        borderRadius: 10
    },
    text:{
        paddingVertical: 8,
        fontWeight: 'bold'
    }
})
