import { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';

import { getCurrentUser, signOutUser } from '@src/services/authService';

function ProfileScreen() {
  const [email, setEmail] = useState<string | null>(getCurrentUser()?.email ?? null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setEmail(user?.email ?? null);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error: any) {
      Alert.alert('Не вдалося вийти', error?.message ?? 'Спробуйте ще раз');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.detail}>Email: {email ?? '—'}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  detail: {
    marginBottom: 16,
    fontSize: 16,
  },
});
