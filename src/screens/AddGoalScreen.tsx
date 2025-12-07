import { StyleSheet, View, Text } from 'react-native';

function AddGoalScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Goal Screen</Text>
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

export default AddGoalScreen;
