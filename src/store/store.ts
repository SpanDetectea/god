import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '@/store/slices/usersSlices'
import userReducer from '@/store/slices/userSlices'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
