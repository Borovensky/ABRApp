import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@react-native-vector-icons/ionicons';

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
      <Ionicons name="home-outline" size={24} color="red" />
      <Button title="Click me" onPress={() => navigation.navigate('Calendar')} />
    </View>
  );
}

export default HomeTitle;
