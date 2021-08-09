import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MyStory = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/user1.jpg')}/>
            <View style={styles.plus}><AntDesign name="pluscircle" size={36} style={styles.logo} color="#097DEB" /></View>
            <Text style={styles.Text}>Create Story</Text>
        </View>
    )
}

export default MyStory

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    image:{
        width: '100%',
        height: '68%'
    },
    plus:{
        width: 40,
        height: 40,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: 'white',
        transform: [{translateY: -20}]
    },
    Text:{
        fontWeight: "800",
        color: '#050505',
        fontSize: 13
    }
})
