import { StyleSheet, View } from 'react-native';
import ItemsListComponent from '../components/ItemsListComponent';
import { useTheme } from '@react-navigation/native';
import { reminderDataSelector } from '../store/main/selectors';
import { useSelector } from 'react-redux';

function HomeScreen() {
  const theme = useTheme();
  const reminderData = useSelector(reminderDataSelector);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ItemsListComponent data={reminderData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default HomeScreen;
