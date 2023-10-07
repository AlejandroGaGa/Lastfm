import { Image, View } from "react-native";
import { CoverStyle } from "../../../styles/styles";

const CoverTrack = ({ img }) => {
  const URL = img["#text"];

  return (
    <View>
      <Image
        style={CoverStyle}
        source={{ uri: URL }}
        width={100}
        height={100}
      />
    </View>
  );
};

export default CoverTrack;
