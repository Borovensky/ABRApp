import auth from '@react-native-firebase/auth';

export const signInWithEmail = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const registerWithEmail = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signOutUser = async () => {
  return auth().signOut();
};

export const getCurrentUser = () => auth().currentUser;
