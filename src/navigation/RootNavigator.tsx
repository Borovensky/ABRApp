import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddGoalScreen from '../screens/AddGoalScreen';

export type RootStackParamList = {
  Home: undefined;
  AddGoal: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: {
      screen: HomeScreen,
    },
    AddGoal: {
      screen: AddGoalScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function RootNavigator() {
  return <Navigation />;
}

export default RootNavigator;
