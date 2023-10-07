import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens";
import { StackDesign } from "../styles/styles";
import Avatar from "../components/Stack/Avatar";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TopTracks"
          component={HomeScreen}
          options={{
            title: "Top Tracks",
            headerRight: () => (
              <Avatar imgUrl="https://raw.githubusercontent.com/AlejandroGaGa/images-portafolio/main/ProfileGithub.jpeg" />
            ),
            headerTintColor: "white",
            headerStyle: StackDesign,
            headerTitleAlign: "center",
            /*       headerShown: false, */
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
