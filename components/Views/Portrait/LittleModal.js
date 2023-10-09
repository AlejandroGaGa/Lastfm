import React from "react";
import { Text, View, Platform } from "react-native";
import {
  ContainerCoverPortraitLittle,
  ContainerLittleModal,
  LeftColor,
  LittleSlider,
  SubTitleStyle,
} from "../../../styles/styles";
import CoverTrackPortrait from "./CoverTrackPortrait";
import ScrollingText from "../../TextAnimition/ScrollingText";
import MusicPlayerLittle from "./MusicPlayerLittle";
import Slider from "@react-native-community/slider";

const LittleModal = ({ Track }) => {
  const Platf = Platform.OS;
  return (
    <View style={ContainerLittleModal}>
      <View style={LeftColor}></View>
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
