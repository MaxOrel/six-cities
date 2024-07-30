import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '..';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
  state: RootState;
  dispatch: AppDispatch;
}>();
