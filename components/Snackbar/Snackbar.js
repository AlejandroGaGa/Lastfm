import React from "react";
import { Snackbar } from "react-native-paper";

const SnackbarItem = ({ open, setOpen, description }) => {
  return (
    <Snackbar visible={open} onDismiss={() => setOpen(false)} duration={5000}>
      {description}
    </Snackbar>
  );
};

export default SnackbarItem;
