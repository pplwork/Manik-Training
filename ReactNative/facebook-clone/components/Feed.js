import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import firestore from "@react-native-firebase/firestore";
import {
  Entypo,
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Feed = ({ data }) => {
  const [posts, setPosts] = useState([]);
  const logged = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      let posts = (await firestore().collection("posts").get()).docs.map(
        (doc) => {
          let id = doc.id;
          let dt = doc.data();
          return { id, ...dt };
        }
      );
      // let map = (doc) => {
      //   console.log("yaha par", doc.data());
      //   posts.push(doc.data());
      // };
      // await firestore()
      //   .collection("posts")
      //   .onSnapshot((docsnap) => {
      //     docsnap.docs.map(map);
      //   });
      let data = await Promise.all(
        posts.map(async (post) => {
          let random = (
            await firestore().collection("users").doc(post.user).get()
          ).data();
          return {
            Profile: random.photo,
            Name: random.name,
            caption: post.caption,
            comments: post.comments,
            likes: post.likes,
            link: post.link,
            id: post.id,
            shares: post.shares,
          };
        })
      );
      setPosts(data);
    })();
  }, []);
  const toggleLike = async (postId) => {
    let post = (await firestore().collection("posts").doc(postId).get()).data();
    if (post.likes.includes(logged.user.id)) {
      let index = post.likes.indexOf(logged.user.id);
      post.likes.splice(index, 1);
      firestore()
        .collection("posts")
        .doc(postId)
        .update({ ...post, likes: post.likes });
    } else {
      let updated = post.likes.push(logged.user.id);
      firestore()
        .collection("posts")
        .doc(postId)
        .update({ ...post, likes: post.likes });
    }
  };
  return (
    <>
      {posts.map((post) => {
        return (
          <React.Fragment key={post.link}>
            <View style={styles.container} key={post.link}>
              <View style={styles.header}>
                <View style={styles.row}>
                  <Avatar source={post.Profile} />
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.UserText}>{post.Name}</Text>
                    <View style={styles.row}>
                      <Text style={styles.time}>9m</Text>
                      <Entypo name="dot-single" size={13} color="#747476" />
                      <Entypo name="globe" size={11} color="#747476" />
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
              <Text style={styles.post}>{post.caption}</Text>
              <Image source={{ uri: post.link }} style={styles.Photo} />
              <View style={styles.footer}>
                <View style={styles.footerCount}>
                  <View style={styles.row}>
                    <View style={styles.IconCount}>
                      <AntDesign name="like1" size={11} color="#FFFFFF" />
                    </View>
                    <View
                      style={{
                        ...styles.IconCount,
                        backgroundColor: "#FB5A75",
                        marginLeft: -5,
                        zIndex: 1,
                      }}
                    >
                      <AntDesign name="heart" size={11} color="#ffffff" />
                    </View>
                    <Text style={styles.TextCount}>{post.likes.length}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.TextCount}>
                      {post.comments} Comments
                    </Text>
                    <Entypo name="dot-single" size={12} color="#747476" />
                    <Text style={styles.TextCount}>{post.shares} Shares</Text>
                  </View>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.footerMenu}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      toggleLike(post.id);
                    }}
                  >
                    {post.likes && post.likes.includes(logged.user.id) ? (
                      <>
                        <View style={styles.Icon}>
                          <AntDesign name="like1" size={20} color="#3578E5" />
                        </View>
                        <Text
                          style={{
                            ...styles.Text,
                            color: "#3578E5",
                            fontWeight: "bold",
                          }}
                        >
                          Like
                        </Text>
                      </>
                    ) : (
                      <>
                        <View style={styles.Icon}>
                          <AntDesign name="like2" size={20} color="#747476" />
                        </View>
                        <Text style={styles.Text}>Like</Text>
                      </>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={styles.Icon}>
                      <FontAwesome5
                        name="comment-alt"
                        size={18}
                        color="#747476"
                      />
                    </View>
                    <Text style={styles.Text}>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={styles.Icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={26}
                        color="#747476"
                      />
                    </View>
                    <Text style={styles.Text}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bottomDivider} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    paddingHorizontal: 11,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  UserText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222121",
  },
  time: {
    fontSize: 13,
    color: "#747476",
  },
  post: {
    fontSize: 14,
    color: "#222121",
    lineHeight: 18,
    paddingHorizontal: 12,
  },
  Photo: {
    marginTop: 9,
    width: "100%",
    height: 400,
  },
  footer: {
    paddingHorizontal: 11,
    backgroundColor: "#ffffff",
  },
  footerCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
  },
  IconCount: {
    backgroundColor: "#1878f3",
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
    borderWidth: 2,
    borderColor: "#ffffff",
    zIndex: 2,
  },
  TextCount: {
    fontSize: 13,
    color: "#747476",
  },
  seperator: {
    width: "100%",
    height: 0.1,
    backgroundColor: "#8D949E",
  },
  footerMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 9,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  Icon: {
    marginRight: 6,
  },
  Text: {
    fontSize: 13,
    color: "#747476",
  },
  bottomDivider: {
    width: "100%",
    height: 11,
    backgroundColor: "#CCD0D5",
  },
});
