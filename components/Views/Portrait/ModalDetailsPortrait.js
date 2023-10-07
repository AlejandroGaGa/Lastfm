import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import {
  CenteredView,
  ContainerCoverPortrait,
  LeftColor,
  ModalView,
  TitleStyle,
} from "../../../styles/styles";
import CoverTrackPortrait from "./CoverTrackPortrait";
import MusicPlayer from "./MusicPlayer";
const ModalDetailsPortrait = ({ Track, modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={CenteredView}>
          <View style={ModalView}>
            <View style={LeftColor}></View>
            <View style={ContainerCoverPortrait}>
              <CoverTrackPortrait img={Track.image[3]} />
            </View>
            <View
              style={{
                backgroundColor: "red",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#504f52", fontSize: 30, fontWeight: "bold" }}
              >
                {Track.name}
              </Text>
              <Text>{Track.artist.name}</Text>
              <MusicPlayer />
            </View>

            <Text>Hello World!</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDetailsPortrait;
