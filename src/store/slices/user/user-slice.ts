import { AuthorizationStatus } from '@constants';
import { User } from '@customType/user';
import { createSlice } from '@reduxjs/toolkit';
import { USER_SLICE_NAME } from '@slices/slice-name';

type UserState = {
  info: User | null;
  status: AuthorizationStatus;
};

const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
};


export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  selectors: {
    userStatus: (state) => state.status,
    user: (state) => state.info,
  },
});
