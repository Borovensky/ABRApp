import { configureStore } from '@reduxjs/toolkit';
import { remindersSlice } from './reminders/slice';

export const store = configureStore({
  reducer: {
    reminders: remindersSlice.reducer,
  },
})