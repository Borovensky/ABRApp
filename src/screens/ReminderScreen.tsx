import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import { ReminderForm, ReminderFormValues } from '@components/ReminderForm';
import { RootRoutes } from '@navigation/screens';
import { createReminder } from '@src/services/firestoreService';

import type { RootStackParamList } from '@navigation/types';

type ReminderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Reminder'>;

function ReminderScreen(props: any) {
  const { params } = props.route;

  const navigation = useNavigation<ReminderScreenNavigationProp>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: ReminderFormValues) => {
    const { title, description } = values;
    try {
      setLoading(true);

      await createReminder({
        title,
        description,
      });

      navigation.navigate(RootRoutes.Tabs);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ReminderForm
        initialTitle={params?.title}
        initialDescription={params?.description}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </View>
  );
}

export default ReminderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
