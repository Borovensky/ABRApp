import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/RootNavigator';

type HomeTitleProps = {
  title?: string;
};

type HomeTitleNavigationProp = NativeStackNavigationProp<RootStackParamList>;

function HomeTitle({ title = 'ABR application' }: HomeTitleProps) {
  const navigation = useNavigation<HomeTitleNavigationProp>();

  return (
    <View>
      <Text>{title}</Text>
      <Button title="Click me" onPress={() => navigation.navigate('AddGoal')} />
    </View>
  );
}

export default HomeTitle;
