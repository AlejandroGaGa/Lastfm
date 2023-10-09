import Slider from "@react-native-community/slider";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ButtonPauseStyle,
  ButtonsPlayerStyle,
  MusicPlayerStyle,
  SliderStyle,
} from "../../../styles/styles";
import { Entypo, AntDesign } from "@expo/vector-icons";

const MusicPlayer = () => {
  return (
    <View style={MusicPlayerStyle}>
      <View style={SliderStyle}>
        <Text>3:30</Text>
        <Slider
          minimumTrackTintColor="#007AFF"
          style={{ width: 300 }}
          thumbTintColor="#333"
          maximumTrackTintColor="#dedfe3"
          minimumTrackTintColor="#333"
        />
        <Text>4:00</Text>
      </View>
      <View style={ButtonsPlayerStyle}>
        <AntDesign name="banckward" size={30} color="#4e5d70" />
        <TouchableOpacity activeOpacity={0.7} style={ButtonPauseStyle}>
          <Entypo name="controller-paus" size={50} color="#4e5d70" />
        </TouchableOpacity>
        <AntDesign name="forward" size={30} color="#4e5d70" />
      </View>
    </View>
  );
};
export default MusicPlayer;
