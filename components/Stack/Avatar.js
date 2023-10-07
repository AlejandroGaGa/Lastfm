import React from "react";
import { View, Image } from "react-native";
import { AvContainer, AvImage } from "../../styles/styles";

const Avatar = ({ imgUrl }) => {
  return (
    <View style={AvContainer}>
      <Image style={AvImage} source={{ uri: imgUrl }} />
    </View>
  );
};

export default Avatar;
