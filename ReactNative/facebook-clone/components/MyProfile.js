import React,{useEffect} from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import {useIsFocused } from '@react-navigation/native';
import { Entypo , AntDesign ,FontAwesome} from '@expo/vector-icons';
// import {Invert} from 'react-native-image-filter-kit';
const MyProfile = (props) => {
    const isFocused = useIsFocused();
    useEffect(()=>{
        if(isFocused)
        props.StackNavigation.setOptions({
        headerShown: false,
    })
    });
    return (
        <View style={styles.container}>
            <View style={styles.coverContainer}>
                <Image source={require('../assets/coverPhoto.jpeg')} style={styles.coverPhoto}/>
                <View style={styles.cameraContainer}>
                    <Entypo name="camera" size={16} color="black" />
                </View>
            </View>
            <View style={styles.ProfileContainer}>
                <Image style={{...styles.coverPhoto , borderRadius: 90}} source={require('../assets/user1.jpg')}/>
                <View style={{...styles.cameraContainer ,...styles.cameraContainer2}}>
                    <Entypo name="camera" size={16} color="black" />
                </View>
            </View>
            <Text style={styles.MyName}>Angelena Joe</Text>
            <View style={styles.storyContainer}>
                <View style={styles.AddStoryContainer}>
                    <View style={styles.plus}><Entypo name="plus" size={17} color="#1877F2" /></View>
                <Text style={styles.StoryText}>Add to Story</Text>
                </View>
                <View style={styles.threeDot}>
                    <Entypo
                    // style={{alignSelf: 'flex-start'}}
                    name="dots-three-horizontal"
                    size={15}
                    color="#222121"
                />
                </View>
            </View>
            <View style={styles.Divider}/>
            <View style={styles.Details}>
                <View style={styles.row}>
                    <FontAwesome style={styles.icon} name="university" size={20} color="#8D949E" />
                    <Text style={styles.DetailText}>Went to University of Boston, London</Text>
                </View>
                <View style={styles.row}>
                    <AntDesign name="clockcircle" style={styles.icon} size={20} color="#8D949E" />
                    <Text style={styles.DetailText} >Joined December 2014</Text>
                </View>
                <View style={styles.row}>
                    <AntDesign name="instagram" style={styles.icon} size={24} color="#8D949E" />
                    <Text style={styles.DetailText} >Angelena_Joe</Text>
                </View>
                <View style={styles.row}>
                    <Entypo name="dots-three-horizontal" style={styles.icon} size={24} color="#8D949E" />
                    <Text style={styles.DetailText} >See Your About Info</Text>
                </View>
                <View style={styles.PublicDetails}>
                    <Text style={styles.publicText}>Edit Public Details</Text>
                </View>
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
    },
    coverContainer:{
        marginHorizontal: 14,
        marginTop: 14,
        height: 225,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'orange',
        overflow: 'hidden',
        position: 'relative'
    },
    coverPhoto:{
        height: '100%',
        width: '100%',
    },
    cameraContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#E4E6EB',
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#BEC3C9' 
    },
    ProfileContainer:{
        height: 180,
        width: 180,
        borderRadius: 90,
        marginTop: -90,
        borderWidth: 5,
        borderColor: '#ffffff',
        backgroundColor: 'orange',
        alignSelf: 'center',
        position: 'relative',
    },
    cameraContainer2:{
        bottom: 10,
        right: 0,
        borderWidth:1,
    },
    MyName:{
        alignSelf: 'center',
        marginVertical: 12,
        fontWeight: 'bold',
        fontSize: 30
    },
    storyContainer:{
        marginHorizontal: 14,
        height:38,
        flexDirection: 'row',
        marginBottom: 15,
    },
    AddStoryContainer:{
        flexDirection: 'row', 
        flex: 1,
        marginRight: 5,
        backgroundColor: '#1877F2' ,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    plus:{
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    StoryText:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight: "700"
    },
    threeDot:{
        width: '15%',
        backgroundColor:'#E4E6EB',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    Divider:{
        height: 0.1,
        backgroundColor: "#8D949E",
        marginHorizontal: 14
    },
    Details:{
        height: 220,
        marginVertical: 15,
        justifyContent: 'space-between',
    },
    row:{
        flexDirection: 'row',
        marginHorizontal: 14,
        width: '70%',
        alignItems:'center'
    },
    DetailText:{
        color: '#050505',
        fontSize: 17,
        width: '85%'
    },
    icon:{
        marginRight: 10
    },
    PublicDetails:{
        marginHorizontal: 14,
        height: 35,
        backgroundColor: '#ECF3FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    publicText:{
        color: '#1877F2',
        fontWeight: 'bold'
    }
})
