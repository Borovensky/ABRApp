import { StyleSheet, FlatList, View } from 'react-native';
// import { Ionicons } from '@react-native-vector-icons/ionicons';

import ReminderItemComponent from './ReminderItemComponent';

type HomeTitleProps = {
  title?: string;
  data: any[];
};

function ItemsListComponent(props: HomeTitleProps) {
  const { data } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ReminderItemComponent title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default ItemsListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});