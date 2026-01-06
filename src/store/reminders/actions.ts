import { actions } from './slice';
import { getRemindersService } from '../../services/firestoreService';

export const {
  setReminders,
  addReminder,
} = actions;

export const getReminders = () => async (dispatch: any) => {
  console.log('getReminders action');
  const reminders = await getRemindersService();
  dispatch(setReminders(reminders));
};