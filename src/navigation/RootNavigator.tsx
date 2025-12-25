import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/Profile';
import AddScreen from '../screens/AddScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Add: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createNativeBottomTabNavigator();

// const Theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: colors.blue,
//     primary: colors.skyBlue,
//     text: colors.abrBlue,
//   },
// };

function TabsNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: {
            type: 'sfSymbol',
            name: 'line.horizontal.3',
          },
          headerShown: true,
          unstable_headerRightItems: () => [
            {
              type: 'button',
              label: 'Add',
              icon: {
                type: 'sfSymbol',
                name: 'plus',
              },
              onPress: () => {
                navigation.getParent()?.navigate('Add');
              },
            },
          ],
        })}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: {
            type: 'sfSymbol',
            name: 'calendar',
          },
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: {
            type: 'sfSymbol',
            name: 'person',
          },
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Add"
            component={AddScreen}
            options={{ title: 'Add' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigator;


// 