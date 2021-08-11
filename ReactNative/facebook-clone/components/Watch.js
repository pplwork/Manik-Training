import React,{useEffect,useRef} from 'react'
import { StyleSheet, Text, View , ScrollView ,TouchableOpacity ,Image } from 'react-native'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import {Feather , MaterialCommunityIcons , Ionicons , FontAwesome , Entypo ,AntDesign,FontAwesome5} from '@expo/vector-icons';
import Avatar from './Avatar';
import { Video , AVPlaybackStatus } from 'expo-av';
const Watch = (props) => {
    const isFocused = useIsFocused();
    const video = useRef(null);
    useEffect(()=>{
        if(isFocused){
    props.StackNavigation.setOptions({
        headerShown: false,
    })
    video.current.playAsync();
    // video.current.setIsMuted();
    }
    });
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.watchHeader}>
                    <View style={styles.WatchRow}>
                        <Text style={{fontWeight: 'bold' , fontSize: 25}}>Watch</Text>
                        <View style={styles.WatchRightBtn}>
                            <TouchableOpacity style={styles.WatchButton}>
                                <Ionicons name="person" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.WatchButton}>
                                <FontAwesome name="search" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.TypeContainer}>
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        >
                        <TouchableOpacity style={{...styles.WatchBtn,backgroundColor: '#ECF3FF'}}><Text style={{...styles.WatchBtnText,color: '#1877F2'}}>For You</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Live</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Music</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Following</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Saved</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Food</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.WatchBtn}><Text style={styles.WatchBtnText}>Gaming</Text></TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.bottomDivider}/>
                <View style={styles.VideoFeedContainer}>
                        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Avatar source={require('../assets/user3.jpg')}/>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.UserText}>Royal Entertainment</Text>
                        <View style={styles.row}>
                            <Text style={styles.time}>9m</Text>
                            <Entypo
                                name="dot-single"
                                size={13}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={11}
                                color="#747476"
                            />
                        </View>
                    </View>
                </View>
                <Entypo
                    // style={{alignSelf: 'flex-start'}}
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
            </View>
            <Text style={styles.post}>Lorem ipsum dolor sit amet.</Text>
            {/* <Image
            source={require('../assets/post1.jpg')}
            style={styles.Photo}
            /> */}
            <Video
            ref={video}
            source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
            resizeMode="cover"
            isLooping
            isMuted={true}
            useNativeControls={false}
            style={styles.Photo}/>
            <View style={styles.footer}>
                <View style={styles.footerCount}>
                    <View style={styles.row}>
                        <View style={styles.IconCount}>
                            <AntDesign name="like1"
                            size={11}
                            color="#FFFFFF"
                            />
                        </View>
                        <View style={{...styles.IconCount , backgroundColor: '#FB5A75',marginLeft: -5, zIndex: 1}}>
                            <AntDesign
                            name="heart"
                            size={11}
                            color="#ffffff"
                            />
                        </View>
                    <Text style={styles.TextCount}>10K</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.TextCount}>2k Comments</Text>
                    <Entypo
                        name="dot-single"
                        size={12}
                        color="#747476"
                    />
                    <Text style={styles.TextCount}>550 Shares</Text>
                    </View>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.footerMenu}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.Icon}>
                            <AntDesign name="like2" size={20} color="#747476" />
                            
                        </View>
                        <Text style={styles.Text}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.Icon}>
                            <FontAwesome5 name="comment-alt" size={18} color="#747476" />
                        </View>
                        <Text style={styles.Text}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.Icon}>
                            <MaterialCommunityIcons name="share-outline" size={26} color="#747476" />
                        </View>
                        <Text style={styles.Text}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.bottomDivider}/>
        </View>
            </ScrollView>
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
