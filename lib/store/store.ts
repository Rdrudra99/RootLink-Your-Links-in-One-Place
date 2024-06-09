// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userDataSlice from '../features/UserSlice/userDataSlice';

export const store = configureStore({
  reducer: {
    heyRudra: userDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;