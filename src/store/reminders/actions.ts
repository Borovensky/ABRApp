import { getRemindersService } from '@src/services/firestoreService';

import { actions } from './slice';

export const {
  setReminders,
  addReminder,
} = actions;

export const getReminders = () => async (dispatch: any) => {
  console.log('getReminders action');
  const reminders = await getRemindersService();
  dispatch(setReminders(reminders));
};