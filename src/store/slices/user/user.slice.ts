import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserLoginResp } from '../../../types';
import { SLICE_NAME } from './constants';
import * as userAsyncActions from './user.actions';

const { userLoginAction } = userAsyncActions;

export interface UserState extends UserLoginResp {
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoading: false,
  isLoggedIn: false
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    logout(state: UserState) {
      state.isLoggedIn = false;
      state.token = '';
      delete state.data;
    }
  },
  extraReducers: {
    [userLoginAction.pending.toString()](state: UserState) {
      state.isLoading = true;
    },
    [userLoginAction.fulfilled.toString()](
      state: UserState,
      { payload }: PayloadAction<UserLoginResp>
    ) {
      state.token = payload?.token;
      state.data = payload.data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [userLoginAction.rejected.toString()](
      state: UserState,
      { payload }: PayloadAction<UserLoginResp>
    ) {
      state.isLoading = false;
      state.error = payload?.error;
    }
  }
});

export const userReducer = userSlice.reducer;
export const userActions = { ...userAsyncActions, ...userSlice.actions };
export default userSlice;
