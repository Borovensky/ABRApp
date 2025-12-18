import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  type: 'default',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { actions } = mainSlice;