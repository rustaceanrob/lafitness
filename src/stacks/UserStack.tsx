import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import Profile from "../screens/Profile";
import React from 'react'
import WorkoutStack from "./WorkoutStack";
import Clubs from "../screens/Clubs";

const Tab = createBottomTabNavigator();
const UserStack = () => {
  return (
    <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "white" },
          tabBarLabelStyle: {
            color: 'black',
          },
        }}
        initialRouteName="Membership"
        sceneContainerStyle={{ backgroundColor: "#fafafa" }}
      >
      <Tab.Screen name="Workouts"
            options={{
              tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="weight-lifter"
                color={focused ? "#f97316" : "gray"}
                size={24}
              />
            ),
          }}>
            {() => <WorkoutStack/>}
      </Tab.Screen>
      <Tab.Screen name="Locations"
            options={{
              tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-location-outline"
                color={focused ? "#f97316" : "gray"}
                size={24}
              />
            ),
          }}>
            {() => <Clubs/>}
      </Tab.Screen>
      <Tab.Screen name="Resources"
            options={{
              tabBarIcon: ({ focused }) => (
              <Entypo
                name="book"
                color={focused ? "#f97316" : "gray"}
                size={24}
              />
            ),
          }}>
            {() => <></>}
      </Tab.Screen>
      <Tab.Screen name="Membership"
            options={{
              tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                color={focused ? "#f97316" : "gray"}
                size={24}
              />
            ),
          }}>
        {() => <Profile name="Rob" 
                        uid="sdfkjsdklfgjklsdfjgklsdfjsdfhsdjkgfhjksdfhgjkdfshgjk" 
                        status="Active" email="rob.netzke@gmail.com" dateJoined="1/1/2021"
                        homeClub="Poway" city="San Diego" zip="92131" phone="(858)-761-4749"/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}


export default UserStack