import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MyStory from "./MyStory";
import OtherStory from "./OtherStory";
import firestore from "@react-native-firebase/firestore";
// var stories = [
//   {
//     source: require("../assets/story1.jpg"),
//     isSeen: false,
//     Profile: require("../assets/Malik.jpg"),
//     Name: "Armaan Malik",
//   },
//   {
//     source: require("../assets/story4.jpg"),
//     isSeen: false,
//     Profile: require("../assets/user2.jpg"),
//     Name: "Ethel Shaw",
//   },
//   {
//     source: require("../assets/story3.jpg"),
//     isSeen: false,
//     Profile: require("../assets/user3.jpg"),
//     Name: "Royal Entertainment",
//   },
//   {
//     source: require("../assets/story2.jpg"),
//     isSeen: true,
//     Profile: require("../assets/user4.jpg"),
//     Name: "Shawn George",
//   },
// ];

const UsersStory = () => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    (async () => {
      let stories = (await firestore().collection("stories").get()).docs.map(
        (doc) => doc.data()
      );
      let data = await Promise.all(
        stories.map(async (stor) => {
          let random = (
            await firestore().collection("users").doc(stor.user).get()
          ).data();
          return {
            Profile: random.photo,
            Name: random.name,
            isSeen: stor.isSeen,
            source: stor.link,
          };
        })
      );
      setStory(data);
    })();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ ...styles.card, marginLeft: 11 }}>
            <MyStory />
          </View>
          {story.map((story) => {
            return (
              <View style={styles.card} key={story.source}>
                <OtherStory
                  source={story.source}
                  isSeen={story.isSeen}
                  Profile={story.Profile}
                  Name={story.Name}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default UsersStory;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 226,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    height: 202,
    width: 110,
    borderRadius: 15,
    marginRight: 6,
    borderWidth: 1,
    borderColor: "#BEC3C9",
    overflow: "hidden",
  },
  bottomDivider: {
    width: "100%",
    height: 11,
    backgroundColor: "#CCD0D5",
  },
});
