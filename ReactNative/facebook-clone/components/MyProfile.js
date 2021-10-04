import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import FriendCard from "./FriendCard";
import ToolBar from "./ToolBar";
import Feed from "./Feed";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
// import {Invert} from 'react-native-image-filter-kit';
var friends = [
  { source: require("../assets/user6.jpg"), name: "Alex Dough" },
  { source: require("../assets/user7.jpg"), name: "Ana klien" },
  { source: require("../assets/user8.jpg"), name: "Trisha Holland" },
  { source: require("../assets/user9.jpg"), name: "Mark Dwane" },
  { source: require("../assets/user10.jpg"), name: "Jeff Harington" },
  { source: require("../assets/user11.jpg"), name: "Christopher June" },
];
const MyProfile = (props) => {
  const isFocused = useIsFocused();
  const currentUser = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    coverPhoto: "",
  });
  useEffect(() => {
    if (isFocused)
      props.StackNavigation.setOptions({
        headerShown: false,
      });
  });
  useEffect(() => {
    if (isFocused) {
      (async () => {
        try {
          console.log(currentUser);
          let us = (
            await firestore().collection("users").doc(currentUser.user.id).get()
          ).data();
          console.log(us);
          setUser(us);
        } catch (err) {
          if (err) {
            console.log(err);
          }
        }
      })();
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.coverContainer}>
          {user.coverPhoto ? (
            <Image
              source={{ uri: user.coverPhoto }}
              style={styles.coverPhoto}
            />
          ) : (
            false
          )}

          <View style={styles.cameraContainer}>
            <Entypo name="camera" size={16} color="black" />
          </View>
        </View>
        <View style={styles.ProfileContainer}>
          <Image
            style={{ ...styles.coverPhoto, borderRadius: 90 }}
            source={{ uri: user.photo }}
          />
          <View
            style={{ ...styles.cameraContainer, ...styles.cameraContainer2 }}
          >
            <Entypo name="camera" size={16} color="black" />
          </View>
        </View>
        <Text style={styles.MyName}>{user.name}</Text>
        <View style={styles.storyContainer}>
          <View style={styles.AddStoryContainer}>
            <View style={styles.plus}>
              <Entypo name="plus" size={17} color="#1877F2" />
            </View>
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
        <View style={styles.Divider} />
        <View style={styles.Details}>
          <View style={styles.row}>
            <FontAwesome
              style={styles.icon}
              name="university"
              size={20}
              color="#8D949E"
            />
            <Text style={styles.DetailText}>{user.education}</Text>
          </View>
          <View style={styles.row}>
            <AntDesign
              name="clockcircle"
              style={styles.icon}
              size={20}
              color="#8D949E"
            />
            <Text style={styles.DetailText}>{user.joined}</Text>
          </View>
          <View style={styles.row}>
            <AntDesign
              name="instagram"
              style={styles.icon}
              size={24}
              color="#8D949E"
            />
            <Text style={styles.DetailText}>{user.instagram}</Text>
          </View>
          <View style={styles.row}>
            <Entypo
              name="dots-three-horizontal"
              style={styles.icon}
              size={24}
              color="#8D949E"
            />
            <Text style={styles.DetailText}>See Your About Info</Text>
          </View>
          <View style={styles.PublicDetails}>
            <Text style={styles.publicText}>Edit Public Details</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.Divider,
            height: 0.2,
            marginHorizontal: 0,
            marginVertical: 8,
          }}
        />
        <View style={styles.friendsContainer}>
          <View
            style={{ ...styles.row, width: "auto", alignItems: "flex-start" }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Friends</Text>
              <Text
                style={{ fontSize: 16, color: "#8D949E", fontWeight: "800" }}
              >
                780 friends
              </Text>
            </View>
            <Text
              style={{
                marginLeft: "auto",
                fontSize: 16,
                color: "#1877F2",
                fontWeight: "600",
              }}
            >
              Find Friends
            </Text>
          </View>
          <View style={styles.displayFriends}>
            {friends.map((friend) => {
              return (
                <FriendCard
                  key={friend.source}
                  source={friend.source}
                  name={friend.name}
                />
              );
            })}
          </View>
          <View style={{ ...styles.PublicDetails, backgroundColor: "#E4E6EB" }}>
            <Text style={{ ...styles.publicText, color: "black" }}>
              See All Friends
            </Text>
          </View>
        </View>
        <View style={styles.bottomDivider} />
        <ToolBar style={{ paddingTop: 15 }} />
        <Feed />
      </ScrollView>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  coverContainer: {
    marginHorizontal: 14,
    marginTop: 14,
    height: 225,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  coverPhoto: {
    height: "100%",
    width: "100%",
  },
  cameraContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#E4E6EB",
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BEC3C9",
  },
  ProfileContainer: {
    height: 180,
    width: 180,
    borderRadius: 90,
    marginTop: -90,
    borderWidth: 5,
    borderColor: "#ffffff",
    alignSelf: "center",
    position: "relative",
  },
  cameraContainer2: {
    bottom: 10,
    right: 0,
    borderWidth: 1,
  },
  MyName: {
    alignSelf: "center",
    marginVertical: 12,
    fontWeight: "bold",
    fontSize: 30,
  },
  storyContainer: {
    marginHorizontal: 14,
    height: 38,
    flexDirection: "row",
    marginBottom: 15,
  },
  AddStoryContainer: {
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    backgroundColor: "#1877F2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  StoryText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  threeDot: {
    width: "15%",
    backgroundColor: "#E4E6EB",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Divider: {
    height: 0.2,
    backgroundColor: "#8D949E",
    marginHorizontal: 14,
  },
  Details: {
    height: 220,
    marginVertical: 15,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 14,
    width: "70%",
    alignItems: "center",
  },
  DetailText: {
    color: "#050505",
    fontSize: 17,
    width: "85%",
  },
  icon: {
    marginRight: 10,
  },
  PublicDetails: {
    marginHorizontal: 14,
    height: 35,
    backgroundColor: "#ECF3FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  publicText: {
    color: "#1877F2",
    fontWeight: "bold",
  },
  friendsContainer: {
    marginBottom: 15,
  },
  displayFriends: {
    marginHorizontal: 14,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bottomDivider: {
    width: "100%",
    height: 11,
    backgroundColor: "#CCD0D5",
  },
});
