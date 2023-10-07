import { Text, TouchableOpacity, View } from "react-native";
import { SubTitleStyle, TitleStyle, TrackStyle } from "../../../styles/styles";
import CoverTrack from "./CoverTrack";
import BtnOptions from "./BtnOptions";

const DetailsTrack = ({ track }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} style={TrackStyle}>
        <CoverTrack img={track.image[0]} />
        <View>
          <Text style={SubTitleStyle}>{track.listeners}</Text>
          <Text style={TitleStyle}>{track.name}</Text>
          <Text style={SubTitleStyle}>{track.artist.name}</Text>
        </View>
      </TouchableOpacity>

      <BtnOptions />
    </View>
  );
};

export default DetailsTrack;
