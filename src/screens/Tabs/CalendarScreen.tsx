import { useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { initialValue } from '@src/store/reminders/selectors';

function CalendarScreen() {
  const value = useSelector(initialValue);

  useEffect(() => {
    console.log('CalendarScreen mounted');
    console.log(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
