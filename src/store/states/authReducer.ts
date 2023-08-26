import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthEmptyState, IAuth} from '../models/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: AuthEmptyState,
  reducers: {
    authLogIn: (state, action: PayloadAction<IAuth>) => {
      return action.payload;
    },
    authLogOut: () => {
      return AuthEmptyState;
    },
  },
});

export const {authLogIn, authLogOut} = authSlice.actions;
export default authSlice.reducer;
