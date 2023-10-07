import { View } from "react-native";
import { Image } from "react-native";
import { CoverStylePortrait } from "../../../styles/styles";

const CoverTrackPortrait = ({ img, style }) => {
  const URL = img["#text"];

  return (
    <View>
      <Image
        style={CoverStylePortrait}
        source={{ uri: URL }}
        width={400}
        height={400}
      />
    </View>
  );
};

export default CoverTrackPortrait;
