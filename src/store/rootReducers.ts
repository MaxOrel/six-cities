import { combineReducers } from '@reduxjs/toolkit';
import offersSlice from './slices/offers';

export const rootReducers = combineReducers({
  [offersSlice.name]: offersSlice.reducer
})
