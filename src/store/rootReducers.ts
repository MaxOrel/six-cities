import { combineReducers } from '@reduxjs/toolkit';
import favoritesSlice from './slices/favorites';
import offerSlice from './slices/offer';
import offersSlice from './slices/offers';
import reviewsSlice from './slices/reviews';
import userSlice from './slices/user';

export const rootReducers = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
})
