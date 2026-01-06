import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../hooks/useTheme';

import { TabsNavigator } from './TabsNavigator';
import ReminderScreen from '../screens/ReminderScreen';
import { RootStackParamList } from './types';
import { RootRoutes } from './screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { theme, colorScheme } = useTheme();

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={theme}>
        <RootStack.Navigator>
          <RootStack.Screen
            name={RootRoutes.Tabs}
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={RootRoutes.Reminder}
            component={ReminderScreen}
            options={{ title: 'Reminder' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigator;


// 