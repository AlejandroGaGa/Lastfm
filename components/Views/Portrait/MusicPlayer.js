import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

const MusicPlayer = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>3:30</Text>
        <Slider minimumTrackTintColor="#007AFF" style={{ width: 300 }} />
        <Text>4:00</Text>
      </View>
    </View>
  );
};
export default MusicPlayer;
