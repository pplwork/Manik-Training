import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over !!!!</Text>
            <Text>Number of Rounds : {props.round}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}  />
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
