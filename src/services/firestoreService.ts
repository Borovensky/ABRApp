// src/services/firestoreService.ts
import { getApp } from '@react-native-firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from '@react-native-firebase/firestore';
import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type Reminder = {
  id: string;
  title: string;
  description: string;
  createdAt?: FirebaseFirestoreTypes.Timestamp | null;
};

const app = getApp();        
const db = getFirestore(app);
const remindersCollection = collection(db, 'reminders');

export const getRemindersService = async () => {
  const snapshot = await getDocs(remindersCollection);
  const reminders = snapshot.docs.map(
    (doc: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>) => {
      const data = doc.data() as Omit<Reminder, 'id'>;
      return { id: doc.id, ...data };
    },
  );

  return reminders;
};

export const createReminder = async (params: { title: string; description: string }) => {
  await addDoc(remindersCollection, {
    title: params.title,
    description: params.description,
    createdAt: Date.now(),
  });
};