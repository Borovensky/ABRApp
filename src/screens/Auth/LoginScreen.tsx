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
import { signInWithEmail } from '@src/services/authService';

import type { RootStackParamList } from '@navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoginNavigation = NativeStackNavigationProp<RootStackParamList, RootRoutes.Login>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginNavigation>();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Error', 'Enter email and password');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmail(email.trim(), password);
    } catch (error: any) {
      Alert.alert('Sign in failed', error?.message ?? 'Please try again');
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
        <Text style={styles.title}>Sign In</Text>
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
        <Button
          title={loading ? 'Signing in...' : 'Sign In'}
          onPress={handleLogin}
          disabled={loading}
        />

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate(RootRoutes.Register)}
          disabled={loading}
        >
          <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
