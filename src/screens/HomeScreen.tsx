import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { reminderDataSelector } from '../store/reminders/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getReminders } from '../store/reminders/actions';
import { useEffect } from 'react';
import { RemindersList } from '../components/RemindersList';

function HomeScreen() {
  const theme = useTheme();
  const dispatch = useDispatch<any>();
  const reminderData = useSelector(reminderDataSelector);

  useEffect(() => {
    dispatch(getReminders());
  }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <RemindersList data={reminderData} />
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
