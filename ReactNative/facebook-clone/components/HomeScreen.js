import React,{useEffect} from 'react'
import { StyleSheet, Text, View , ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import ToolBar from './ToolBar';
import UsersStory from './UsersStory';
import Feed from './Feed';

const HomeScreen = (props) => {
    const isFocused = useIsFocused();
    useEffect(()=>{
    if(isFocused)
    props.StackNavigation.setOptions({
        headerShown: true
    })
    });
    return (
        <View style={styles.container}>
            <ScrollView style={styles.View}>
            <ToolBar/>
            <UsersStory/>
            <Feed/>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View: {
        height: '100%',
    }
})
