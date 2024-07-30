import { createSlice } from '@reduxjs/toolkit';
import { OFFERS } from '../../../mocks/offers';
import { OfferPreview } from '../../../types/offer';
import { FAVORITES_SLICE_NAME } from '../slice-name';

type FavoritesState = {
  items: OfferPreview[];
};

const initialState: FavoritesState = {
  items: OFFERS.filter((item) => item.isFavorite)
};

export const favoritesSlice = createSlice({
  name: FAVORITES_SLICE_NAME,
  initialState,
  reducers: {},
  selectors: {
    favorites: (state) => state.items,
  },
});


