import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUsersState } from '@/types/IUser';

const initialState: IUsersState = {
  data: [],
  loading: true,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<IUser[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;