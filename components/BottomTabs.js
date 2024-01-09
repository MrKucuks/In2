import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../screens/Settings';
import HomeScreen from '../screens/Home';
import FriendsScreen from '../screens/Friends';
import MapScreen from '../screens/Map';
import ExploreScreen from '../screens/Explore';

import { NavigationContainer } from '@react-navigation/native';
import { Entypo,FontAwesome5,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
    
        <Tab.Navigator>

        <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color,size}) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="Explore" 
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarIcon: ({ color,size}) => (
            <Entypo name="magnifying-glass" size={24} color="black" />
          ),
        }} />

        <Tab.Screen name="Map" 
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color,size}) => (
            <Entypo name="map" size={24} color="black" />
          ),
        }}  />

        
        <Tab.Screen name="Events" 
        component={FriendsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Events",
          tabBarIcon: ({ color,size}) => (
            <MaterialCommunityIcons name="party-popper" size={24} color="black" />
          ),
        }}  />
        <Tab.Screen name="Profile" 
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color,size}) => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          ),
        }}  />

        
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabs;