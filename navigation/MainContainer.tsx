import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import HomeScreenWeb from './screens/HomeScreen.web';
import ReserveerScreen from './screens/ReserveerScreen';
import ProfielScreen from './screens/ProfielScreen';

const homeName = "Home";
const detailsName = "Reserveer";
const settingsName = "Profiel";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return (
              <Ionicons name={iconName ?? ''} size={size} color={color} />
            );
          },
          tabBarStyle: {
            backgroundColor: '#0F2635',
            height: 100,
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: '#E1E1E1',

          tabBarLabelStyle: {
            marginHorizontal: 5,
            marginBottom: 5,
            fontFamily: 'Azonix',
          },
          tabBarIconStyle: {
            marginBottom: 5,
          },
          headerStyle: { 
            backgroundColor: '#1B73E4',
            
          },
          headerTitleStyle: {
            color: '#E1E1E1',
            fontFamily: 'Azonix',
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={Platform.OS === 'web' ? HomeScreenWeb : HomeScreen}
          options={{
            tabBarLabel: homeName,
          }}
        />
        <Tab.Screen
          name={detailsName}
          component={ReserveerScreen}
          options={{
            tabBarLabel: detailsName,
          }}
        />
        <Tab.Screen
          name={settingsName}
          component={ProfielScreen}
          options={{
            tabBarLabel: settingsName,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
