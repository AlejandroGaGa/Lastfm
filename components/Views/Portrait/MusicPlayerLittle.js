import Slider from "@react-native-community/slider";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ButtonPauseStyle,
  ButtonsPlayerStyle,
  ContentButtonsLittle,
  MusicPlayerStyle,
  SliderStyle,
} from "../../../styles/styles";
import { Entypo, AntDesign } from "@expo/vector-icons";

const MusicPlayerLittle = () => {
  return (
    <View style={ContentButtonsLittle}>
      <TouchableOpacity activeOpacity={0.7} style={ButtonPauseStyle}>
        <AntDesign name="banckward" size={20} color="#4e5d70" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={ButtonPauseStyle}>
        <Entypo name="controller-paus" size={40} color="#4e5d70" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={ButtonPauseStyle}>
        <AntDesign name="forward" size={20} color="#4e5d70" />
      </TouchableOpacity>
    </View>
  );
};
export default MusicPlayerLittle;
