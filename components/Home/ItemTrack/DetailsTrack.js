import { Text, TouchableOpacity, View } from "react-native";
import { SubTitleStyle, TitleStyle, TrackStyle } from "../../../styles/styles";
import CoverTrack from "./CoverTrack";
import BtnOptions from "./BtnOptions";
import ModalDetailsPortrait from "../../Views/Portrait/ModalDetailsPortrait";
import { useState } from "react";

const DetailsTrack = ({ track, setTrackData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
          style={TrackStyle}
        >
          <CoverTrack img={track.image[0]} />
          <View>
            <Text style={SubTitleStyle}>{track.listeners}</Text>
            <Text style={TitleStyle}>{track.name}</Text>
            <Text style={SubTitleStyle}>{track.artist.name}</Text>
          </View>
        </TouchableOpacity>

        <BtnOptions />
      </View>
      <ModalDetailsPortrait
        Track={track}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTrackData={setTrackData}
      />
    </>
  );
};

export default DetailsTrack;
