import React, { useContext, useEffect, useState } from "react";
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
import { ArtistContext } from "../../../context/AppContext";
import { SaveData } from "../../../hooks/AddArtist";
import SnackbarItem from "../../Snackbar/Snackbar";

const ModalDetailsPortrait = ({
  Track,
  modalVisible,
  setModalVisible,
  setTrackData,
}) => {
  const Platf = Platform.OS;
  const { favorites } = useContext(ArtistContext);
  const [openSnakbar, setOpenSnackbar] = useState(false);
  const ChangeLittleModal = async () => {
    setModalVisible(false);
    setTrackData(Track);
    const saved = await SaveData("favorites", favorites);
    if (saved) setOpenSnackbar(true);
  };

  return (
    <>
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
              <ButtonsOptions Track={Track} />
            </View>
          </View>
        </View>
      </Modal>
      <SnackbarItem
        open={openSnakbar}
        setOpen={setOpenSnackbar}
        description="Artistas guardados en favoritos"
      />
    </>
  );
};

export default ModalDetailsPortrait;
