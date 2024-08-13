import { AuthorizationStatus } from '@constants';
import { User } from '@customType/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_SLICE_NAME } from '@slices/slice-name';
import { checkAuth, login, logout } from './user-thunk';

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
  reducers: {
    checkUserStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        checkAuth.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(
        login.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(logout.fulfilled, (state: UserState) => {
        state.info = null;
        state.status = AuthorizationStatus.NoAuth;
      })
      .addCase(
        checkAuth.rejected,
        (state: UserState) => {
          state.status = AuthorizationStatus.NoAuth;
        }
      );
  },
  selectors: {
    userStatus: (state) => state.status,
    user: (state) => state.info,
  },
});
