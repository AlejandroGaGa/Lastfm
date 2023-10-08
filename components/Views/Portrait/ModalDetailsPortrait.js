import React, { useState } from "react";
import { Alert, Text, Pressable, View } from "react-native";
import {
  CenteredView,
  ContainerCoverPortrait,
  ContainerDetailsStyle,
  LeftColor,
  ModalView,
  TitlesDetailsContainerStyles,
  TitlesTextPortrait,
} from "../../../styles/styles";
import CoverTrackPortrait from "./CoverTrackPortrait";
import MusicPlayer from "./MusicPlayer";
import ButtonsOptions from "./ButtonsOptions";
import Modal from "react-native-modal";

const ModalDetailsPortrait = ({ Track, modalVisible, setModalVisible }) => {
  return (
    <Modal
      transparent={true}
      isVisible={modalVisible}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(false)}
      backdropOpacity={0}
      backdropColor="black"
      style={{ margin: 0 }}
    >
      <View style={CenteredView}>
        <View style={ModalView}>
          <View style={LeftColor}></View>
          <View style={ContainerCoverPortrait}>
            <CoverTrackPortrait img={Track.image[3]} />
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
