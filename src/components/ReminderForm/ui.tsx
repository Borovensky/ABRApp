import { useState } from 'react';

import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import { ABRText } from '../ABRRText';

import type { ReminderFormProps } from './types';

export function ReminderForm(props: ReminderFormProps) {
  const { initialTitle = '', initialDescription = '', loading, onSubmit } = props;
  const theme = useTheme();

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (loading) return;

    if (!title.trim() || !description.trim()) {
      setError('Title and Description are required');
      return;
    }

    setError('');
    await onSubmit({
      title: title.trim(),
      description: description.trim(),
    });
  };

  return (
    <View style={styles.container}>
      <ABRText style={styles.label}>Title</ABRText>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
          },
        ]}
        placeholder="Enter title"
        placeholderTextColor={theme.colors.border}
        value={title}
        onChangeText={setTitle}
      />

      <ABRText style={styles.label}>Description</ABRText>
      <TextInput
        style={[
          styles.input,
          styles.textArea,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
          },
        ]}
        placeholder="Enter description"
        placeholderTextColor={theme.colors.border}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {error ? <ABRText style={styles.error}>{error}</ABRText> : null}

      <View style={styles.buttonContainer}>
        <Button title={loading ? 'Saving...' : 'Add'} onPress={handleSubmit} />
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


