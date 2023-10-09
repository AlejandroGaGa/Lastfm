import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, ProfileScreen } from "../screens";
import { StackDesign } from "../styles/styles";
import Avatar from "../components/Stack/Avatar";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLargeTitle: true,
            title: "Top",
            headerRight: () => (
              <Avatar imgUrl="https://raw.githubusercontent.com/AlejandroGaGa/images-portafolio/main/ProfileGithub.jpeg" />
            ),
            headerTintColor: "white",
            headerStyle: StackDesign,
            headerTitleAlign: "center",
            gestureEnabled: false,
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
