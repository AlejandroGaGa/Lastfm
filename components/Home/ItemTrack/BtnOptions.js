import { TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { BtnOptionsStyle } from "../../../styles/styles";
const BtnOptions = () => {
  return (
    <TouchableOpacity style={BtnOptionsStyle}>
      <SimpleLineIcons name="options" size={30} color="#4e5d70" />
    </TouchableOpacity>
  );
};

export default BtnOptions;
