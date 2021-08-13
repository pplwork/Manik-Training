import React,{useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View , Image , TouchableOpacity ,ScrollView} from 'react-native'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import {FontAwesome ,FontAwesome5,Ionicons ,Entypo } from '@expo/vector-icons';
import Avatar from './Avatar';
import NotificationCard from './NotificationCard';

const notifications = [
    { id : 1,source: require('../assets/user6.jpg') , imgSource: require('../assets/list.png') , name: 'Nikhil Prasad' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 2,source: require('../assets/user10.jpg') , imgSource: require('../assets/list.png') , name: 'John Gate' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 3,source: require('../assets/user8.jpg') , imgSource: require('../assets/list.png') , name: 'Aadra Jain' , text:"shared Olymic's post." , time: 'Aug 8 at 11:02 AM', isSeen: true},
    {id : 4,source: require('../assets/user9.jpg') , imgSource: require('../assets/list.png') , name: 'Levi Ackerman' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 5,source: require('../assets/user2.jpg') , imgSource: require('../assets/list.png') , name: 'Aarohi Singhania' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 6,source: require('../assets/user7.jpg') , imgSource: require('../assets/list.png') , name: 'Aasritha Lingam' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    { id : 7,source: require('../assets/user6.jpg') , imgSource: require('../assets/list.png') , name: 'Nikhil Prasad' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: true},
    {id : 8,source: require('../assets/user10.jpg') , imgSource: require('../assets/list.png') , name: 'John Gate' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 9,source: require('../assets/user8.jpg') , imgSource: require('../assets/list.png') , name: 'Aadra Jain' , text:"shared Olymic's post." , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 10,source: require('../assets/user9.jpg') , imgSource: require('../assets/list.png') , name: 'Levi Ackerman' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: true},
    {id : 11,source: require('../assets/user2.jpg') , imgSource: require('../assets/list.png') , name: 'Aarohi Singhania' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
    {id : 12,source: require('../assets/user7.jpg') , imgSource: require('../assets/list.png') , name: 'Aasritha Lingam' , text:'added a new Photo.' , time: 'Aug 8 at 11:02 AM', isSeen: false},
]

const Notifications = (props) => {
    const isFocused = useIsFocused();
  useEffect(()=>{
      if(isFocused)
    props.StackNavigation.setOptions({
      headerShown: false,
    })
  });
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.notiHeader}>
                <View style={styles.WatchRow}>
                        <Text style={{fontWeight: 'bold' , fontSize: 25}}>Notifications</Text>
                        <View style={styles.WatchRightBtn}>
                            <TouchableOpacity style={styles.WatchButton}>
                                <FontAwesome name="search" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        <View style={styles.friendReqContainer}>
            <View style={styles.WatchRow}>
                <Text style={{fontWeight:'bold' , fontSize: 16 , lineHeight: 30}}>Friend Requests</Text>
                <Text style={{fontSize: 14 , lineHeight: 30 , color: '#1877F2'}}>See All</Text>
            </View>
            <View style={styles.reqContainer}>
                <View style={styles.ReqPhotoCon}>
                    <Avatar source={require('../assets/user11.jpg')} style={{height: 60 , width: 60 }}/>
                    <Image style={styles.ReqPhoto} source={require('../assets/try.png')}/>
                </View>
                <View style={styles.ReqTextContainer}>
                    <Text style={{fontSize: 16, width: '80%'}}><Text style={{fontWeight: 'bold'}}>Teresa Perry</Text> sent you a friend request.</Text>
                    <Text style={{fontSize: 13, color: '#65676B' , paddingVertical: 2}}>Sanya Nagpal and 11 other mutual friends</Text>
                    <View style={styles.storyContainer}>
                    <View style={styles.AddStoryContainer}>
                            <Text style={styles.StoryText}>confirm</Text>
                        </View>
                        <View style={styles.threeDot}>
                            <Text>Delete</Text>
                    </View>
                </View>
                <Entypo style={styles.Dots} name="dots-three-horizontal" size={20} color="black" />
                </View>
            </View>
            <View style={styles.earlierContainer}>
                <Text style={{fontWeight: 'bold',paddingHorizontal: 14,fontSize: 18,paddingVertical: 10}}>Earlier</Text>
            {notifications.map((noti)=>{
                return <NotificationCard key={noti.id} source={noti.source} imgSource={noti.imgSource} name={noti.name} time={noti.time} text={noti.text} isSeen={noti.isSeen}/>
            })}
            </View>
        </View>
        </ScrollView>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    WatchRow:{
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    WatchRightBtn:{
        flexDirection: 'row',
    },
    WatchButton:{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#DADDE1',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    storyContainer:{
        height:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    AddStoryContainer:{
        flexDirection: 'row', 
        // flex: 1,
        width: '48%',
        backgroundColor: '#1877F2' ,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    StoryText:{
        color:'#ffffff',
        fontSize: 14,
        fontWeight: "500",
        textTransform: 'capitalize'
    },
    threeDot:{
        width: '48%',
        backgroundColor:'#E4E6EB',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    Dots:{
        position:'absolute',
        right: 5,
        top :0
    }
})
