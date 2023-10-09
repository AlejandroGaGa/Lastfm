import { Text, TouchableOpacity, View } from "react-native";
import {
  ButtonOptionStyle,
  ContentButtons,
  SubTitleStyle,
} from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import SnackbarItem from "../../Snackbar/Snackbar";
import { useContext, useState } from "react";
import { ArtistContext } from "../../../context/AppContext";
const ButtonsOptions = ({ Track }) => {
  const [open, setOpen] = useState(false);
  const { addFavorite } = useContext(ArtistContext);

  const saveCachedData = async () => {
    addFavorite(Track);
    setOpen(true);
  };
  return (
    <>
      <View style={ContentButtons}>
        <TouchableOpacity activeOpacity={0.1} style={ButtonOptionStyle}>
          <AntDesign name="arrowup" size={15} color="#4e5d70" />
          <Text style={SubTitleStyle}>{Track?.listeners}</Text>
          <AntDesign name="arrowdown" size={15} color="#4e5d70" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.1} style={ButtonOptionStyle}>
          <AntDesign name="retweet" size={15} color="#4e5d70" />
          <Text style={SubTitleStyle}>200</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.1} style={ButtonOptionStyle}>
          <AntDesign name="caretright" size={15} color="#4e5d70" />
          <Text style={SubTitleStyle}>{Track?.listeners}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => saveCachedData()}
          activeOpacity={0.1}
          style={ButtonOptionStyle}
        >
          <AntDesign name="plus" size={15} color="#4e5d70" />
        </TouchableOpacity>
      </View>
      <SnackbarItem
        open={open}
        setOpen={setOpen}
        description="Aritista seleccionado para favoritos..."
      />
    </>
  );
};

export default ButtonsOptions;
