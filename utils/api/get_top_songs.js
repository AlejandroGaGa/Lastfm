/* http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json */
import axios from "axios";

const endpoint =
  "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json";

export const getTopTracks = async () => {
  const response = await axios.get(endpoint);
  const res = response.data.tracks.track;

  return res;
};
