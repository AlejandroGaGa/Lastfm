import { Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  const options = ["Favoritos", "Configuracion"];
  return (
    <View style={{ flex: 1, backgroundColor: "#152238" }}>
      {options.map((option, _index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ backgroundColor: "red", height: 50, color: "white" }}
            key={_index}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileScreen;
