import { useEffect } from 'react';

import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RemindersList } from '@components/RemindersList'; 
import { getReminders } from '@store/reminders/actions';
import { reminderDataSelector } from '@store/reminders/selectors';

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});


