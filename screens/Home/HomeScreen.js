import { Text, FlatList, SafeAreaView } from "react-native";
import { getTopTracks } from "../../utils/api/get_top_songs";
import { useEffect, useState } from "react";
import { DetailsTrack } from "../../components/Home";

const HomeScreen = () => {
  const [TopTracks, SetTopTracks] = useState([]);

  useEffect(() => {
    async function getTopTenTracks() {
      const response = await getTopTracks();
      SetTopTracks(response);
    }
    getTopTenTracks();
  }, []);

  return (
    <SafeAreaView>
      {TopTracks.length > 0 ? (
        <FlatList
          data={TopTracks}
          renderItem={({ item }) => <DetailsTrack track={item} />}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
