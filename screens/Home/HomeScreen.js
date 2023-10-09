import { Text, FlatList, SafeAreaView } from "react-native";
import { getTopTracks } from "../../utils/api/get_top_songs";
import { useEffect, useState } from "react";
import { DetailsTrack } from "../../components/Home";
import { getAuthSession } from "../../utils/api/auth_getMobileSession";
import LittleModal from "../../components/Views/Portrait/LittleModal";

const HomeScreen = () => {
  const [TopTracks, SetTopTracks] = useState([]);
  const [TrackData, setTrackData] = useState(null);

  useEffect(() => {
    async function getTopTenTracks() {
      const response = await getTopTracks();
      SetTopTracks(response);
    }
    getTopTenTracks();
  }, []);

  return (
    <>
      <SafeAreaView>
        {TopTracks.length > 0 ? (
          <FlatList
            data={TopTracks}
            renderItem={({ item }) => (
              <DetailsTrack track={item} setTrackData={setTrackData} />
            )}
          />
        ) : null}
      </SafeAreaView>

      {TrackData !== null ? <LittleModal Track={TrackData} /> : null}
    </>
  );
};

export default HomeScreen;
