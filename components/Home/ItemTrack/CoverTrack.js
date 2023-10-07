import { Image, View } from "react-native";

const CoverTrack = ({ img }) => {
  const URL = img["#text"];

  return (
    <View>
      <Image source={{ uri: URL }} width={100} height={100} />
    </View>
  );
};

export default CoverTrack;
