import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const options = ["Favoritos", "Configuracion", "Cerrar Sesion"];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#152238" }}>
      {options.map((option, _index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Favorites")}
            activeOpacity={0.7}
            style={{
              backgroundColor:
                option === "Cerrar Sesion" || option === "Configuracion"
                  ? "#30394a"
                  : "#4e5d70",
              height: 50,
              color: "white",
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
            }}
            key={_index}
            disabled={
              option === "Cerrar Sesion" || option === "Configuracion"
                ? true
                : false
            }
          >
            <Text style={{ color: "white", fontSize: 20 }}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileScreen;
