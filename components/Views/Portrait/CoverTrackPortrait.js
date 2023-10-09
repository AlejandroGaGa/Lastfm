import { View } from "react-native";
import { Image } from "react-native";
import MusicPlayer from "./MusicPlayer";

const CoverTrackPortrait = ({ img, borderRadius, width, height }) => {
  const URL = img["#text"];

  return (
    <View style={{ elevation: 150 }}>
      <Image
        borderRadius={borderRadius}
        source={{ uri: URL }}
        width={width}
        height={height}
      />
    </View>
  );
};

export default CoverTrackPortrait;
