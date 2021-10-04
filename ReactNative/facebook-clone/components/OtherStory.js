import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const OtherStory = ({ source, isSeen, Profile, Name }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: source }}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            ...styles.imgContainer,
            borderColor: isSeen ? "#CED0D4" : "#097DEB",
          }}
        >
          <Image blurRadius={2} style={styles.img} source={{ uri: Profile }} />
        </View>
        <Text style={styles.text}>{Name}</Text>
      </ImageBackground>
    </View>
  );
};

export default OtherStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    height: 40,
    width: 40,
    left: 9,
    top: 9,
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 13,
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
});
