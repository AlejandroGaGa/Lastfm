import { Text, FlatList, SafeAreaView } from "react-native";
import { getTopTracks } from "../../utils/api/get_top_songs";
import { useEffect, useState } from "react";
import { DetailsTrack } from "../../components/Home";
import { getAuthSession } from "../../utils/api/auth_getMobileSession";
import LittleModal from "../../components/Views/Portrait/LittleModal";

const HomeScreen = () => {
  const [TopTracks, SetTopTracks] = useState([]);
  const [TrackData, setTrackData] = useState(null);
  const [chargingData, setChargingData] = useState(false);

  useEffect(() => {
    getAuthSession();
    setChargingData(false);
    async function getTopTenTracks() {
      const response = await getTopTracks();
      SetTopTracks(response);
    }
    getTopTenTracks();

    setTimeout(() => {
      setChargingData(true);
    }, 3000);
  }, []);

  return (
    <>
      <SafeAreaView>
        {TopTracks.length > 0 ? (
          <FlatList
            style={{ marginTop: 0 }}
            data={TopTracks}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item }) => (
              <DetailsTrack
                track={item}
                setTrackData={setTrackData}
                chargingData={chargingData}
              />
            )}
            ListEmptyComponent={<Text>No hay canciones</Text>}
          />
        ) : null}
      </SafeAreaView>

      {TrackData !== null ? (
        <LittleModal Track={TrackData} setTrackData={setTrackData} />
      ) : null}
    </>
  );
};

export default HomeScreen;
