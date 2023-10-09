import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { getData } from "../../hooks/AddArtist";
import React, { useEffect, useState } from "react";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  console.log(
    "🚀 ~ file: FavoritesScreen.js:7 ~ FavoritesScreen ~ favorites:",
    favorites
  );

  const [chargingData, setChargingData] = useState(false);
  useEffect(() => {
    setChargingData(false);
    async function getFavorites() {
      try {
        const fetchedFavorites = await getData("favorites");

        setFavorites(JSON.parse(fetchedFavorites));
        setChargingData(true);
      } catch (e) {
        console.error("Error fetching favorites", error);
        setChargingData(true);
      }
    }
    getFavorites();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#152238" }}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: "#4e5d70",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {item?.artist?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
