import { CitiesName } from '@customType/city';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES } from '@shared/constants';
import { OFFERS_SLICE_NAME } from '@slices/slice-name';
import { OFFERS } from '../../../mocks/offers';
import { OffersState } from './types';


const initialState:OffersState = {
  currentCity: CITIES[0].name,
  offers: OFFERS
};

export const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    changeCity: (state, action:PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    offers: (state:OffersState) => state.offers,
    city: (state:OffersState) => state.currentCity,
  }
})
