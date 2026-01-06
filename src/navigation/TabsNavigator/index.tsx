import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import HomeScreen from '../../screens/HomeScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import ProfileScreen from '../../screens/Profile';
import { TabsParamList } from '../types';
import { RootRoutes, TabsRoutes } from '../screens';

const Tab = createNativeBottomTabNavigator<TabsParamList>();

export function TabsNavigator() {
  return (
    <Tab.Navigator initialRouteName={TabsRoutes.Home}>
      <Tab.Screen
        name={TabsRoutes.Home}
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
                navigation.getParent()?.navigate(RootRoutes.Reminder);
              },
            },
          ],
        })}
      />
      <Tab.Screen
        name={TabsRoutes.Calendar}
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
        name={TabsRoutes.Profile}
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