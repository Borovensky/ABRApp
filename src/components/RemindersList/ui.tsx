import { StyleSheet, FlatList, View } from 'react-native';
// import { Ionicons } from '@react-native-vector-icons/ionicons';
import { ReminderListItem } from '../ReminderListItem';
import { RemindersListProps } from './types';

export function RemindersList(props: RemindersListProps) {
  const { data } = props;
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ReminderListItem title={item.title} description={item.description} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
  },
});