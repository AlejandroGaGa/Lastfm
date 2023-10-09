import React, { useState } from "react";
import { Alert, Text, Pressable, View } from "react-native";
import {
  CenteredView,
  ContainerCoverPortrait,
  ContainerDetailsStyle,
  CoverStylePortrait,
  LeftColor,
  ModalView,
  TitlesDetailsContainerStyles,
  TitlesTextPortrait,
} from "../../../styles/styles";
import CoverTrackPortrait from "./CoverTrackPortrait";
import MusicPlayer from "./MusicPlayer";
import ButtonsOptions from "./ButtonsOptions";
import Modal from "react-native-modal";

const ModalDetailsPortrait = ({
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
          <View style={ContainerCoverPortrait}>
            <CoverTrackPortrait
              img={Track.image[3]}
              style={CoverStylePortrait}
              borderRadius={50}
              width={Platf === "ios" ? 300 : 400}
              height={Platf === "ios" ? 300 : 400}
            />
          </View>
          <View style={ContainerDetailsStyle}>
            <View style={TitlesDetailsContainerStyles}>
              <Text style={TitlesTextPortrait}>{Track.name}</Text>
              <Text>{Track.artist.name}</Text>
            </View>
            <MusicPlayer />
            <ButtonsOptions />
          </View>

          <Text>Hello World!</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetailsPortrait;
