import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/Profile';

export type RootStackParamList = {
  Home: undefined;
  Calendar: undefined;
  Profile: undefined;
};


const Tab = createNativeBottomTabNavigator();

function RootNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{
            title: 'Home',
            tabBarIcon: {
              type: 'sfSymbol',
              name: 'line.horizontal.3',
            },
          }} />
          <Tab.Screen name="Calendar" component={CalendarScreen} options={{
            title: 'Calendar',
            tabBarIcon: {
              type: 'sfSymbol',
              name: 'calendar',
            },
          }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            title: 'Profile',
            tabBarIcon: {
              type: 'sfSymbol',
              name: 'person',
            },
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigator;


// 