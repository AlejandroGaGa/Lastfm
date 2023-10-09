import React from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import {
  ButtonDownLittleModal,
  ContainerCoverPortraitLittle,
  ContainerLittleModal,
  LeftColor,
  LittleSlider,
  SubTitleStyle,
} from "../../../styles/styles";
import CoverTrackPortrait from "./CoverTrackPortrait";
import MusicPlayerLittle from "./MusicPlayerLittle";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";

const LittleModal = ({ Track, setTrackData }) => {
  const Platf = Platform.OS;

  return (
    <View style={ContainerLittleModal}>
      <View style={LeftColor}></View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setTrackData(null)}
        style={ButtonDownLittleModal}
      >
        <AntDesign name="down" size={20} color="#4e5d70" />
      </TouchableOpacity>
      <View style={ContainerCoverPortraitLittle}>
        <CoverTrackPortrait
          img={Track.image[1]}
          borderRadius={50}
          width={Platf === "ios" ? 50 : 70}
          height={Platf === "ios" ? 50 : 70}
        />
        <View style={{ width: 150, overflow: "hidden" }}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={SubTitleStyle}>
            {Track?.name}
          </Text>
        </View>
        <MusicPlayerLittle />
      </View>
      <Slider
        thumbTintColor="#333"
        maximumTrackTintColor="#dedfe3"
        minimumTrackTintColor="#333"
        style={LittleSlider}
      />
    </View>
  );
};

export default LittleModal;
