import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@shared/api';
import { OfferPreview } from '../../../types/offer';
import { FAVORITES_SLICE_NAME } from '../slice-name';
import { changeFavorites, fetchFavorites } from './favorites-thunk';
import { FavoritesStatus } from './types';

type FavoritesState = {
  items: OfferPreview[];
  status: RequestStatus
};

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: FAVORITES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
    } )
    .addCase(changeFavorites.fulfilled, (state, action) => {
      switch (action.payload.status) {
        case FavoritesStatus.Added:
          state.items.push(action.payload.offer);
          break;
        case FavoritesStatus.Removed:
          state.items = state.items.filter(
            ({ id }) => id !== action.payload.offer.id
          );
          break;
      }
    })
  },

  selectors: {
    favorites: (state) => state.items,
    favoriteStatus: (state) => state.status,

  },
});


