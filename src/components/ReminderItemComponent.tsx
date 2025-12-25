// import Ionicons from "@react-native-vector-icons/ionicons";
import { View, StyleSheet, Pressable } from "react-native";
import { useTheme } from '@react-navigation/native';
import RText from "./RText";

type ReminderItemComponentProps = {
  title: string;
};

function ReminderItemComponent(props: ReminderItemComponentProps) {
  const { title } = props;
  const theme = useTheme();

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
      }}
    >
      <View style={styles.innerContainer}>
        <View>
          <RText>Title: {title}</RText>
        </View>
        <View>
          <RText>Period: 10:00 - 11:00</RText>
        </View>
      </View>
    </Pressable>
  );
}

export default ReminderItemComponent;

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