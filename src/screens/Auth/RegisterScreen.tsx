import { useState } from 'react';

import { useNavigation, useTheme } from '@react-navigation/native';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { RootRoutes } from '@navigation/screens';
import { registerWithEmail } from '@src/services/authService';

import type { RootStackParamList } from '@navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RegisterNavigation = NativeStackNavigationProp<RootStackParamList, RootRoutes.Register>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterNavigation>();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await registerWithEmail(email.trim(), password);
    } catch (error: any) {
      Alert.alert('Sign up failed', error?.message ?? 'Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={[styles.input, { borderColor: colors.border }]}
          placeholder="Email"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.border }]}
          placeholder="Password"
          placeholderTextColor={colors.text}
          secureTextEntry
          autoComplete="off"
          textContentType="none"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.border }]}
          placeholder="Confirm password"
          placeholderTextColor={colors.text}
          secureTextEntry
          autoComplete="off"
          textContentType="none"
          autoCorrect={false}
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Button
          title={loading ? 'Signing up...' : 'Sign Up'}
          onPress={handleRegister}
          disabled={loading}
        />

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate(RootRoutes.Login)}
          disabled={loading}
        >
          <Text style={styles.linkText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  linkContainer: {
    marginTop: 12,
  },
  linkText: {
    textAlign: 'center',
    color: '#1a73e8',
    fontWeight: '500',
  },
});
