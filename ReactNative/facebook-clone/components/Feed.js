import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import Avatar from './Avatar';
import { Entypo , AntDesign ,EvilIcons ,MaterialCommunityIcons , FontAwesome5 } from '@expo/vector-icons';
import PhotoCard from './PhotoCard';
const PhotoFeed = [
    {
        username: 'Royal Entertainment',
        userPhoto: require('../assets/user3.jpg'),
        photo: require('../assets/post1.jpg'),
        likes: '5k',
        comments: '330',
        shares: '36',
        time: '9m'
    },
    {
        username: 'Shawn George',
        userPhoto: require('../assets/user4.jpg'),
        photo: require('../assets/post2.jpg'),
        likes: '5k',
        comments: '330',
        shares: '36',
        time: 'Yesterday at 12:26 PM'
    },
    {
        username: 'Ethel Shah',
        userPhoto: require('../assets/user2.jpg'),
        photo: require('../assets/post3.jpg'),
        likes: '5k',
        comments: '330',
        shares: '36',
        time: 'Sat at 3:45PM'
    },
    
]
const Feed = () => {
    return (
        <>
        {PhotoFeed.map(photo=>{return <PhotoCard key={photo.photo} username={photo.username}  photo={photo.photo} userPhoto={photo.userPhoto} likes={photo.likes}
        comments={photo.comments} shares={photo.shares} time={photo.time}
        />})}
        </>
    )
}

export default Feed

const styles = StyleSheet.create({
    bottomDivider: {
        width: '100%',
        height: 11,
        backgroundColor: '#CCD0D5' 
    }
})
