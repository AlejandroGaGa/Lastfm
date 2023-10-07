import { Platform } from "react-native";
const TrackStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#152238",
  gap: 15,
  alignItems: "center",
  padding: 10,
};
const TitleStyle = {
  fontSize: 20,
  color: "white",
};
const SubTitleStyle = {
  fontSize: 15,
  color: "#4e5d70",
};
const BtnOptionsStyle = {
  position: "absolute",
  right: 10,
  top: 15,
};
const CoverStyle = {
  width: 100,
  height: 100,
  borderRadius: 8,

  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  }),
};

const StackDesign = {
  backgroundColor: "#152238",
};

/* Avatar */
const AvContainer = {
  alignItems: "center",
};
const AvImage = {
  width: 55,
  height: 55,
  borderRadius: 50,
  backgroundColor: "white",
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  }),
};

export {
  TrackStyle,
  TitleStyle,
  SubTitleStyle,
  BtnOptionsStyle,
  CoverStyle,
  StackDesign,
  AvContainer,
  AvImage,
};
