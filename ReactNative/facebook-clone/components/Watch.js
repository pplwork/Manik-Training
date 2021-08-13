import React,{useCallback, useEffect,useRef, useState} from 'react'
import { StyleSheet, Text, View , ScrollView ,TouchableOpacity ,Image, FlatList } from 'react-native'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import {Feather , MaterialCommunityIcons , Ionicons , FontAwesome , Entypo ,AntDesign,FontAwesome5} from '@expo/vector-icons';
import Avatar from './Avatar';
import { Video , AVPlaybackStatus } from 'expo-av';
import FeedContainer from './FeedContainer';
const videos = [
    {
        source: require('../assets/video1.mp4'),
        key: 1
    },
    {
        source: require('../assets/video1.mp4'),
        key: 2
    },
    {
        source: require('../assets/video1.mp4'),
        key: 3
    },
]
const Watch = (props) => {
    const [currentVisible, changeCurrentVisible] = useState(0);
    const isFocused = useIsFocused();
    const configRef = useRef({itemVisiblePercentThreshold: 80});
    const videoRef = useRef([]);
    useEffect(()=>{
        if(isFocused){
    props.StackNavigation.setOptions({
        headerShown: false,
    })
    // video.current.playAsync();
    // video.current.setIsMuted();
    }
    });
    // const renderItem=({video})=>{
    //     console.log('inside render Item');
    //     return <FeedContainer source={video.source}/>
    // }
    const ItemsChanged = useCallback((item)=>{
        if(!item.viewableItems.length){
            changeCurrentVisible(-1);
        }
        else{
            changeCurrentVisible(item.viewableItems[0].index)
        }
    },[])
    return (
        <View style={styles.container}>
                <FlatList
                data={videos}
                renderItem={({item ,index})=>(<FeedContainer source={item.source} index={index} isFocused={isFocused} currentVisible={currentVisible} videoRef={videoRef} />)}
                keyExtractor={item=>item.key.toString()}
                viewabilityConfig ={configRef.current}
                onViewableItemsChanged={ItemsChanged}
                />
                {/* <FeedContainer isFocused={isFocused}/> */}
        </View>
    )
}

export default Watch

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    watchHeader:{
        height: 105,
        // backgroundColor: 'red'
    },
    bottomDivider: {
        width: '100%',
        height: 11,
        backgroundColor: '#CCD0D5' 
    },
    WatchRow:{
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    WatchRightBtn:{
        flexDirection: 'row',
    },
    WatchButton:{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12
    },
    TypeContainer:{
        // backgroundColor: 'cyan',
        paddingBottom: 15,
        paddingTop:5,
        paddingLeft: 11
    },
    WatchBtn:{
        marginRight: 12,
        // backgroundColor: 'red',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    WatchBtnText:{
        fontWeight: 'bold',
        fontSize: 15
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        paddingHorizontal: 11,
        
    },
    row:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    UserText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: "#222121",
    },
    time: {
        fontSize: 13,
        color: '#747476'
    },
    post:{
        fontSize: 14,
        color: '#222121',
        lineHeight: 18,
        paddingHorizontal: 12,
    },
    Photo:{
        marginTop: 9,
        width: '100%',
        height: 400
    },
    footer:{
        paddingHorizontal: 11,
        backgroundColor: '#ffffff'
    },
    footerCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 13,
    },
    IconCount:{
        backgroundColor: '#1878f3',
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 0,
        borderWidth: 2,
        borderColor: '#ffffff',
        zIndex: 2
    },
    TextCount: {
        fontSize: 13,
        color: '#747476',
        
    },
    seperator:{
        width: '100%',
        height: 0.1,
        backgroundColor: '#8D949E',
    },
    footerMenu:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 9,
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    Icon:{
        marginRight:6
    },
    Text:{
        fontSize: 13,
        color: '#747476'
    },
    
})
