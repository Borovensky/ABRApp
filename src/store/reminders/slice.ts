import { createSlice } from '@reduxjs/toolkit';

// { id: '1', title: 'Item 1 adad', description: 'Description 1' },
// { id: '2', title: 'Item 2', description: 'Description 2' },
// { id: '3', title: 'Item 3', description: 'Description 3' },
// { id: '4', title: 'Item 4', description: 'Description 4' },
// { id: '5', title: 'Item 5', description: 'Description 5' },
// { id: '6', title: 'Item 6', description: 'Description 6' },
// { id: '7', title: 'Item 7', description: 'Description 7' },
// { id: '8', title: 'Item 8', description: 'Description 8' },
// { id: '9', title: 'Item 9', description: 'Description 9' },
// { id: '10', title: 'Item 10 test', description: 'Description 10' },

const initialState = {
  data: [],
  // type: 'default',
};

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    setReminders: (state, action) => {
      state.data = action.payload;
    },
    addReminder: (state, action) => {
      const { title, description } = action.payload;

      const newItem = {
        id: Date.now().toString(),
        title,
        description,
      };

      state.data.push(newItem);
    },
  },
});


export const { actions } = remindersSlice;