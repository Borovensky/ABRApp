import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import { RootRoutes } from '@navigation/screens';
import { TabsNavigation } from '@navigation/TabsNavigation';
import { RootStackParamList } from '@navigation/types';
import ReminderScreen from '@screens/ReminderScreen';
import { useABRTheme } from '@src/hooks/useABRTheme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { theme, colorScheme } = useABRTheme();

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={theme}>
        <RootStack.Navigator>
          <RootStack.Screen
            name={RootRoutes.Tabs}
            component={TabsNavigation}
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
 