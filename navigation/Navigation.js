import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, ProfileScreen } from "../screens";
import { StackDesign } from "../styles/styles";
import Avatar from "../components/Stack/Avatar";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [headerShown, setHeaderShown] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TopTracks"
          component={HomeScreen}
          options={{
            title: "Poll, Top Tracks this week",
            headerRight: () => (
              <Avatar imgUrl="https://raw.githubusercontent.com/AlejandroGaGa/images-portafolio/main/ProfileGithub.jpeg" />
            ),
            headerTintColor: "white",
            headerStyle: StackDesign,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "My Profile",
            headerRight: () => (
              <Avatar imgUrl="https://raw.githubusercontent.com/AlejandroGaGa/images-portafolio/main/ProfileGithub.jpeg" />
            ),
            headerTintColor: "white",
            headerStyle: StackDesign,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
