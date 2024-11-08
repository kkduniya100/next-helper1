import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Keep only authReducer or any other slices you use

export const store = configureStore({
  reducer: {
    auth: authReducer, // Remove apiSlice from here
  },
});

export default store;
