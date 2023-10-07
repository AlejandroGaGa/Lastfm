/* http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json */
import axios from "axios";
import md5 from "md5";
const apiKey = "bda12256e58b00f192dcd3a3354b7081";
const secret = "c6a591770fc2baf9d568abbfd1b0b9c4";
const username = "AlexDev99";
const password = "Skateordie_123";
const api_sig =
  `api_key${apiKey}method${"auth.getMobileSession"}password${password}username${username}` +
  secret;

const endpoint = `https://ws.audioscrobbler.com/2.0/?method=auth.getMobileSession&password=${password}&username=${username}&api_key=${apiKey}&api_sig=${md5(
  api_sig
)}&format=json`;

export const getAuthSession = async () => {
  try {
    const response = await axios.post(endpoint);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
