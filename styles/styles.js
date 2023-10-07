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
const CoverStylePortrait = {
  borderRadius: 40,
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      width: 300,
      height: 300,
    },
    android: {
      elevation: 18,
    },
  }),
};
const ContainerCoverPortrait = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  position: "absolute",
  top: 60,
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
      width: 30,
      height: 30,
    },
  }),
};

/* Modal */
const CenteredView = {
  flex: 1,
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "flex-end",
};

const LeftColor = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "40%",
  backgroundColor: "#fafbff",
  borderTopLeftRadius: 80,
};
const ModalView = {
  margin: 20,
  backgroundColor: "white",
  borderTopLeftRadius: 60,
  borderTopRightRadius: 60,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  width: "100%",
  height: "90%",
  position: "absolute",
  justifyContent: "flex-end",
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
  CenteredView,
  ModalView,
  LeftColor,
  CoverStylePortrait,
  ContainerCoverPortrait,
};
