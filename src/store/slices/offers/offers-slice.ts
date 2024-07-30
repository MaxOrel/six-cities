import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OFFERS } from '../../../mocks/offers';
import { CITIES } from '../../../shared/constants';
import { CitiesName } from '../../../types/city';
import { OffersState } from './types';


const OFFERS_SLICE_NAME = 'offers';
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
