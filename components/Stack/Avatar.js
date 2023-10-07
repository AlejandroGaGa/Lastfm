import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { AvContainer, AvImage } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation
const Avatar = ({ imgUrl }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Profile")}
      activeOpacity={0.7}
      style={AvContainer}
    >
      <Image style={AvImage} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

export default Avatar;
