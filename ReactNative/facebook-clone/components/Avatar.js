import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Avatar = ({ source, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {source ? (
        <Image
          source={typeof source == "number" ? source : { uri: source }}
          style={{ ...styles.Image, ...style }}
        />
      ) : (
        false
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: "relative",
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
