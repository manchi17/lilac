import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons,  Foundation,FontAwesome,FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/home";
import Cartoon from "../screens/cartoon";
import News from "../screens/news";
import { COLORS } from "../styles/colors";

const Drawer = createDrawerNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        openByDefault
        drawerType="permanent"
        drawerStyle={{ width: "20%" }}
        drawerContentOptions={{
          itemStyle: {
            borderLeftWidth: 3,
            borderLeftColor: COLORS.blue,
            marginLeft: 0,
            borderRadius: 0,
            marginVertical: 10,
          },
          activeBackgroundColor: COLORS.white,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cartoon"
          component={Cartoon}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="image"
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="News"
          component={News}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="newspaper-sharp"
            
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Graph"
          component={News}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <Foundation
                name="graph-pie"
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Folder"
          component={News}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="folder"
               
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="Game"
          component={News}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="gamepad-circle"
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="Help"
          component={News}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome5 name="hands-helping"
                size={30}
                color={focused ? COLORS.blue : COLORS.grey}
              />
            ),
          }}
        />
         
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
