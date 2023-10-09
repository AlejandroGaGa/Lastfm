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

const ContainerCoverPortrait = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  position: "absolute",
  top: 60,
};
const ContainerCoverLandspace = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  position: "absolute",
  top: 100,
  left: 50,
  gap: 45,
  ...Platform.select({
    ios: {
      top: 80,
      left: 100,
      width: "60%",
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
const ContainerCoverPortraitLittle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 15,
  justifyContent: "flex-start",
  zIndex: 1,
  position: "absolute",
  top: 40,
  left: 40,
  backgroundColor: "transparent",
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
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-end",
};

const LeftColor = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "28%",
  backgroundColor: "#fafbff",
  borderTopLeftRadius: 60,
};
const ModalView = {
  backgroundColor: "white",
  borderTopLeftRadius: 60,
  borderTopRightRadius: 60,
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
  bottom: 0,
  justifyContent: "flex-end",
};
/* ModalDetailsPortrait */
const ContainerDetailsStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "40%",
  flexDirection: "column",

  bottom: "5%",
  gap: 30,
};

const TitlesDetailsContainerStyles = {
  display: "flex",
  alignItems: "center",
};
const TitlesDetailsContainerStylesLands = {
  display: "flex",
  alignItems: "center",
  width: "20%",
  overflow: "hidden",
};

const TitlesTextPortrait = {
  color: "#504f52",
  fontSize: 40,
  fontWeight: "bold",
};
/* Music player */
const SliderStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "5%",
  ...Platform.select({
    ios: {
      marginLeft: "5%",
    },
  }),
};
const MusicPlayerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  ...Platform.select({
    ios: {
      width: "40%",
    },
  }),
};
const MusicPlayerStyleLandspace = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
};
const ButtonsPlayerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "50%",
  alignItems: "center",
  ...Platform.select({
    ios: {
      width: "100%",
    },
  }),
};
const ButtonPauseStyle = {
  backgroundColor: "#fafbff",
  borderRadius: 50,
  padding: 10,
};
/* LlittleComponent */
const ContainerLittleModal = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: 200,
  backgroundColor: "white",
  zIndex: 1,
  borderTopLeftRadius: 60,
  borderTopRightRadius: 60,
};
/* Buttons options details music player */
const ContentButtons = {
  flexDirection: "row",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  padding: 10,
};

const ButtonOptionStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  padding: 10,
  borderRadius: 10,
};

const ContentButtonsLittle = {
  ...(Platform.OS === "ios" && {
    marginLeft: "-10%",
  }),
  width: "40%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
};

const LittleSlider = {
  width: "90%",
  position: "absolute",
  bottom: "20%",
  left: "5%",
};

const ButtonDownLittleModal = {
  position: "absolute",
  right: 30,
  top: 5,
  backgroundColor: "red",
  width: 40,
  height: 40,
  borderRadius: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
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
  ContainerCoverPortrait,
  SliderStyle,
  MusicPlayerStyle,
  ButtonsPlayerStyle,
  ButtonPauseStyle,
  ContainerDetailsStyle,
  TitlesDetailsContainerStyles,
  TitlesTextPortrait,
  ContentButtons,
  ContainerLittleModal,
  ContainerCoverPortraitLittle,
  ContentButtonsLittle,
  LittleSlider,
  ButtonDownLittleModal,
  ContainerCoverLandspace,
  MusicPlayerStyleLandspace,
  TitlesDetailsContainerStylesLands,
  ButtonOptionStyle,
};
