import { useEffect, useState } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Auth/LoginScreen';
import RegisterScreen from '@screens/Auth/RegisterScreen';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

import { RootRoutes } from '@navigation/screens';
import { TabsNavigation } from '@navigation/TabsNavigation';
import { RootStackParamList } from '@navigation/types';
import ReminderScreen from '@screens/ReminderScreen';
import { useABRTheme } from '@src/hooks/useABRTheme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { theme, colorScheme } = useABRTheme();
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          key={currentUser ? 'app' : 'auth'}
          initialRouteName={currentUser ? RootRoutes.Tabs : RootRoutes.Login}
        >
          {currentUser ? (
            <>
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
            </>
          ) : (
            <>
              <RootStack.Screen
                name={RootRoutes.Login}
                component={LoginScreen}
                options={{ title: 'Login', headerBackVisible: false }}
              />
              <RootStack.Screen
                name={RootRoutes.Register}
                component={RegisterScreen}
                options={{ title: 'Register' }}
              />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 