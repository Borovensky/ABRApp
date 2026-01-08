import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, Pressable } from 'react-native';

import { ABRText } from '@components/ABRRText';
import { RootStackParamList } from '@navigation/types';

import { ReminderListItemProps } from './types';

export function ReminderListItem(props: ReminderListItemProps) {
  const { title, description } = props;
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Reminder'>>();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { borderColor: theme.colors.border },
        {
          backgroundColor: pressed ? theme.colors.background : theme.colors.card,
        },
      ]}
      onPress={() => {
        console.log('ReminderItemComponent pressed');
        navigation.navigate('Reminder', {
          title,
          description,
        });
      }}
    >
      <View style={styles.innerContainer}>
        <View>
          <ABRText>Title: {title}</ABRText>
        </View>
        <View>
          <ABRText>Period: 10:00 - 11:00</ABRText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    // borderColor: 'rgb(199, 199, 204)',
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});