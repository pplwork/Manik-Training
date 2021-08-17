import React,{useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import {FontAwesome ,FontAwesome5,Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';
import MenuCard from './MenuCard';
const menu = [
    {source: require('../assets/notiWatch.png'),text:"Videos on Watch" , notCount:null},
    {source: require('../assets/saved.png'),text:"Saved" , notCount:null},
    {source: require('../assets/notiMarketplace.png'),text:"Marketplace" , notCount:1},
    {source: require('../assets/job.png'),text:"jobs" , notCount:null},
    {source: require('../assets/friends.png'),text:"Friends" , notCount:null},
    {source: require('../assets/events.png'),text:"Events" , notCount:null},
    {source: require('../assets/memories.png'),text:"memories" , notCount:null},
    {source: require('../assets/pages.png'),text:"pages" , notCount:null},
    {source: require('../assets/gaming.png'),text:"gaming" , notCount:null},
    {source: require('../assets/groups.png'),text:"groups" , notCount:null},
]
const Menu = (props) => {
    const isFocused = useIsFocused();
    useEffect(()=>{
        if(isFocused)
        props.StackNavigation.setOptions({
        headerShown: false,
    })
    });
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.menuHeader}>
                <View style={styles.WatchRow}>
                        <Text style={{fontWeight: 'bold' , fontSize: 25}}>Menu</Text>
                        <View style={styles.WatchRightBtn}>
                            <TouchableOpacity style={styles.WatchButton}>
                                <FontAwesome name="search" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
            <View style={{...styles.WatchRow ,justifyContent: 'flex-start'}}>
                <Avatar source={require('../assets/user1.jpg')}/>
                <View style={styles.descContainer}>
                    <Text style={{fontWeight: 'bold' , fontSize: 16}}>Angelena Joe</Text>
                    <Text style={{color: '#606770' , fontSize: 14}}>See your profile</Text>
                </View>
            </View>
            </View>
            <View style={styles.Divider}/>
            <View style={styles.MenuContainer}>
                {menu.map((menu)=>{
                    return <MenuCard key={menu.source} source={menu.source} text={menu.text} notCount={menu.notCount}/>
                })}
                
            </View>
            <View style={styles.utilityContainer}>
                <View style={{...styles.PublicDetails , backgroundColor: '#E4E6EB'}}>
                    <Text style={{...styles.publicText , color: 'black'}}>See More</Text>
                </View>
                <View style={styles.Divider}/>
                <View style={{...styles.WatchRow ,justifyContent: 'flex-start'}}>
                    <View style={styles.WatchButton}><FontAwesome5 name="question" size={14} color="black" /></View>
                    <Text style={{color: '#000000', fontWeight: 'bold',fontSize: 17 , marginLeft: 10}}>Help & Support</Text>
                    <FontAwesome style={{marginLeft: 'auto'}} name="chevron-down" size={16} color="black" />
                </View>
                <View style={styles.Divider}/>
                <View style={{...styles.WatchRow ,justifyContent: 'flex-start'}}>
                    <View style={styles.WatchButton}><Ionicons name="ios-settings-outline" size={18} color="black" /></View>
                    <Text style={{color: '#000000', fontWeight: 'bold',fontSize: 17 , marginLeft: 10}}>Setings & Privacy</Text>
                    <FontAwesome style={{marginLeft: 'auto'}} name="chevron-down" size={16} color="black" />
                </View>
                <View style={{...styles.PublicDetails , backgroundColor: '#E4E6EB'}}>
                    <Text style={{...styles.publicText , color: 'black'}}>Log Out</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0F2F5',
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
        backgroundColor: '#DADDE1',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 12
    },
    descContainer:{
        marginLeft: 10
    },
    Divider:{
        height: 0.5,
        backgroundColor: "#CCD0D5" ,
        marginHorizontal: 14 
    },
    PublicDetails:{
        marginHorizontal: 14,
        height: 35,
        backgroundColor: '#ECF3FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    publicText:{
        color: '#1877F2',
        fontWeight: 'bold'
    },
    MenuContainer:{
        paddingHorizontal: 14,
        height: '40%',
        flexWrap: 'wrap-reverse',
        flexDirection: 'column',
        paddingTop : 10,
    },
    
})
