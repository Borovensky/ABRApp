import { StyleSheet, View } from 'react-native';
import HomeTitle from '../components/HomeTitle';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeTitle />
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

export default HomeScreen;
