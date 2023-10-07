import { Text, TouchableOpacity, View } from "react-native";
import { TitleStyle, TrackStyle } from "../../../styles/styles";
import CoverTrack from "./CoverTrack";

const DetailsTrack = ({ track }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={TrackStyle}>
      <CoverTrack img={track.image[0]} />
      <View>
        <Text style={TitleStyle}>{track.listeners}</Text>
        <Text style={TitleStyle}>{track.name}</Text>
        <Text style={TitleStyle}>{track.artist.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsTrack;
