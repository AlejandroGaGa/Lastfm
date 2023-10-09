import React, { useState } from "react";
import { Alert, Text, Pressable, View } from "react-native";
import {
  CenteredView,
  ContainerCoverLandspace,
  ContainerCoverPortrait,
  ContainerDetailsStyle,
  CoverStylePortrait,
  LeftColor,
  ModalView,
  TitlesDetailsContainerStyles,
  TitlesDetailsContainerStylesLands,
  TitlesTextPortrait,
} from "../../../styles/styles";
import CoverTracksLandspace from "./CoverTracksLandspace";
/* import MusicPlayer from "./MusicPlayer";
import ButtonsOptions from "./ButtonsOptions"; */
import Modal from "react-native-modal";
import MusicPlayer from "../Portrait/MusicPlayer";
import MusicPlayerLandscape from "./MusicPlayerLandscape";

const ModalDetailsLandspace = ({
  Track,
  modalVisible,
  setModalVisible,
  setTrackData,
}) => {
  const Platf = Platform.OS;
  const ChangeLittleModal = () => {
    setModalVisible(false);
    setTrackData(Track);
    console.log("Cerrado");
  };

  return (
    <Modal
      transparent={true}
      isVisible={modalVisible}
      swipeDirection="down"
      onSwipeComplete={ChangeLittleModal}
      backdropOpacity={0}
      backdropColor="black"
      style={{ margin: 0 }}
    >
      <View style={CenteredView}>
        <View style={ModalView}>
          <View style={LeftColor}></View>
          <View style={ContainerCoverLandspace}>
            <CoverTracksLandspace
              img={Track.image[3]}
              borderRadius={50}
              width={Platf === "ios" ? 200 : 200}
              height={Platf === "ios" ? 200 : 200}
            />
            <View style={TitlesDetailsContainerStylesLands}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={TitlesTextPortrait}
              >
                {Track.name}
              </Text>
              <Text>{Track.artist.name}</Text>
            </View>
            <MusicPlayerLandscape />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetailsLandspace;
