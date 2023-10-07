import { Text, View } from "react-native";
import { TitleStyle, TrackStyle } from "../../../styles/styles";
import CoverTrack from "./CoverTrack";

const DetailsTrack = ({ track }) => {
  return (
    <View style={TrackStyle}>
      <CoverTrack img={track.image[0]} />
      <Text style={TitleStyle}>{track.name}</Text>
    </View>
  );
};

export default DetailsTrack;
