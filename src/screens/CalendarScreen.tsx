import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { initialValue } from '../store/main/selectors';

function CalendarScreen() {
  const value = useSelector(initialValue);

  useEffect(() => {
    console.log('AddGoalScreen mounted');
    console.log(value);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;
