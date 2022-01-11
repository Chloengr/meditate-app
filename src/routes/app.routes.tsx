import React from "react";
import HomeScreen from "../pages/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "../services/auth";
import LogoHeaderWhite from "../assets/textLogoW.svg";
import TopicsScreen from "../pages/TopicsScreen";

export type AppStackParamList = {
  Home: { user: { id: number; name: string; email: string } };
  Topics: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

interface AppProps {
  auth: Auth | null;
}

const AppRoutes = ({ auth }: AppProps) => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user: auth?.user }}
        options={{ headerTitle: () => <LogoHeaderWhite /> }}
      />
      <AppStack.Screen
        name="Topics"
        component={TopicsScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
