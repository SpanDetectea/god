import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IPerson, IPersonDetails } from '@/types/IPerson';

const initialState: IPerson = {
  data: null,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    fetchUserSuccess(state, action: PayloadAction<IPersonDetails>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearUser(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, clearUser } =
  userSlice.actions;

export const selectUserState = (state: RootState) => state.user;

export default userSlice.reducer;
