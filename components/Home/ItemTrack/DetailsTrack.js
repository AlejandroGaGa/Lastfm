import { Text, TouchableOpacity, View } from "react-native";
import { SubTitleStyle, TitleStyle, TrackStyle } from "../../../styles/styles";
import CoverTrack from "./CoverTrack";
import BtnOptions from "./BtnOptions";
import ModalDetailsPortrait from "../../Views/Portrait/ModalDetailsPortrait";
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import ModalDetailsLandspace from "../../Views/LandSpace/ModalDetailsLandspace";

const DetailsTrack = ({ track, setTrackData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const orientation = ScreenOrientation.getOrientationAsync();
  const [currentOrientation, setCurrentOrientation] = useState(1);

  useEffect(() => {
    async function getOrientation() {
      const current = await ScreenOrientation.getOrientationAsync();
      setCurrentOrientation(current);
    }
    getOrientation();
  }, [orientation]);

  const ModalDetails =
    currentOrientation === 1 ? ModalDetailsPortrait : ModalDetailsLandspace;
  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
          style={TrackStyle}
        >
          <CoverTrack img={track.image[2]} />
          <View>
            <Text style={SubTitleStyle}>{track.listeners}</Text>
            <Text style={TitleStyle}>{track.name}</Text>
            <Text style={SubTitleStyle}>{track.artist.name}</Text>
          </View>
        </TouchableOpacity>

        <BtnOptions />
      </View>

      <ModalDetails
        Track={track}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTrackData={setTrackData}
      />
    </>
  );
};

export default DetailsTrack;
