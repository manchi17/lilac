import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  Foundation,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../screens/home";
import Cartoon from "../screens/cartoon";
import Quote from "../screens/quote";
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
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <Ionicons
                  name="md-home"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Cartoon"
          component={Cartoon}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <Ionicons
                  name="image"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Quote"
          component={Quote}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <Ionicons
                  name="newspaper-sharp"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Graph"
          component={Home}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <Foundation
                  name="graph-pie"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Folder"
          component={Home}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <FontAwesome
                  name="folder"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Game"
          component={Home}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <MaterialCommunityIcons
                  name="gamepad-circle"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Home}
          options={{
            drawerLabel: "",
            drawerIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        borderLeftColor: COLORS.blue,
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                    : null
                }
              >
                <FontAwesome5
                  name="hands-helping"
                  size={30}
                  color={focused ? COLORS.blue : COLORS.grey}
                />
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
