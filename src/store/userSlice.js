// store/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload; 
    },
    loginUser: (state, action) => {
      state.user = action.payload; 
    }
  }
});

export const { registerUser, loginUser } = userSlice.actions;

export default userSlice.reducer;