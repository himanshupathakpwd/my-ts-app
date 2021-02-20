import { createAsyncThunk } from '@reduxjs/toolkit';

import { userLoginService } from '../../../services';
import { UserLoginReq } from '../../../types';
import { SLICE_NAME } from './constants';

export const userLoginAction = createAsyncThunk(
  `${SLICE_NAME}/login`,
  async (user: UserLoginReq) => {
    return await userLoginService(user);
  }
);
