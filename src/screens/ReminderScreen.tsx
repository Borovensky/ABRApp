import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useDispatch } from 'react-redux';

// import { addReminder } from '../store/main/actions';
import type { RootStackParamList } from '../navigation/types';
import { createReminder } from '../services/firestoreService';

type ReminderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Reminder'>;

function ReminderScreen(props: any) {
  const { params } = props.route;

  const navigation = useNavigation<ReminderScreenNavigationProp>();
  // const dispatch = useDispatch();
  
  const [title, setTitle] = useState(params?.title || '');
  const [description, setDescription] = useState(params?.description || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!title.trim() || !description.trim()) {
      setError('Title and Description are required');
      return;
    }

    try {
      setLoading(true);
      setError('');

      await createReminder({
        title: title.trim(),
        description: description.trim(),
      });

      setTitle('');
      setDescription('');
      setError('');

      navigation.navigate('Tabs');
    } catch (e) {
      console.error(e);
      setError('Something went wrong while saving. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title={loading ? 'Saving...' : 'Add'} onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 8,
  },
});

export default ReminderScreen;
