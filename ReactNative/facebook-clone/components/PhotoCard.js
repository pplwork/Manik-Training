import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import Avatar from './Avatar';
import { Entypo , AntDesign ,EvilIcons ,MaterialCommunityIcons , FontAwesome5 } from '@expo/vector-icons';
const PhotoCard = (props) => {
    console.log(props);
    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Avatar source={props.userPhoto}/>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.UserText}>{props.username}</Text>
                        <View style={styles.row}>
                            <Text style={{...styles.time,fontSize: 13}}>{props.time}</Text>
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
            <Image
            source={props.photo}
            style={styles.Photo}
            />
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
                    <Text style={styles.TextCount}>{props.likes}</Text>
                    </View>
                    <View style={styles.row}>
                    <Text style={styles.TextCount}>{props.comments} Comments</Text>
                    <Entypo
                        name="dot-single"
                        size={12}
                        color="#747476"
                    />
                    <Text style={styles.TextCount}>{props.shares} Shares</Text>
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
        </>
    )
}

export default PhotoCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    bottomDivider: {
        width: '100%',
        height: 11,
        backgroundColor: '#CCD0D5' 
    }
})
