import AsyncStorage from "@react-native-async-storage/async-storage";

export const SaveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return e;
  }
};
export const getData = async (key) => {
  console.log(key);
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return e;
  }
};
