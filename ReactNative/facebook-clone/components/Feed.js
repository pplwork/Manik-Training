import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import Avatar from './Avatar';
import { Entypo , AntDesign ,EvilIcons } from '@expo/vector-icons';

const Feed = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <Avatar source={require('../assets/user3.jpg')}/>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.UserText}>Jazzy B</Text>
                        <View style={styles.row}>
                            <Text style={styles.time}>9m</Text>
                            <Entypo
                                name="dot-single"
                                size={12}
                                color="#747476"
                            />
                            <Entypo
                                name="globe"
                                size={10}
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
            source={require('../assets/post1.jpg')}
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
                        <View style={{...styles.IconCount , backgroundColor: '#FB5A75',marginLeft: -11, zIndex: 1}}>
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
                <View style={styles.footerCount}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.Icon}>
                            <EvilIcons name="like" size={24} color="black" />
                            
                        </View>
                        <Text style={styles.Text}>Like</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Feed

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
        fontSize: 14,
        fontWeight: 'bold',
        color: "#222121",
    },
    time: {
        fontSize: 9,
        color: '#747476'
    },
    post:{
        fontSize: 12,
        color: '#222121',
        lineHeight: 16,
        paddingHorizontal: 11,
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
        paddingVertical: 15,
    },
    IconCount:{
        backgroundColor: '#1878f3',
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
        borderWidth: 2,
        borderColor: '#ffffff',
        zIndex: 2
    },
    TextCount: {
        fontSize: 11,
        color: '#424040',
        
    },
    seperator:{
        width: '100%',
        height: 0.5,
        backgroundColor: '#8D949E',
    },
    footerMenu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 9
    },
    button:{
        flexDirection: 'row'
    },
    Icon:{
        marginRight:6
    },
    Text:{
        fontSize: 12,
        color: '#747476'
    }
})
