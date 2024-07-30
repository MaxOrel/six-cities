import { CitiesName } from '@customType/city';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES } from '@shared/constants';
import { OFFERS_SLICE_NAME } from '@slices/slice-name';
import { fetchOffersAction } from './offer-thunk';
import { OffersState } from './types';

const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offers: [],
  requestStatus: 'idle'
};

export const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOffersAction.pending,
        (state) => {
          state.requestStatus = 'loading';
        }
      )
      .addCase(
        fetchOffersAction.fulfilled,
        (state, action) => {
          state.offers = action.payload;
          state.requestStatus = 'success';
        }
      ) .addCase(
        fetchOffersAction.rejected,
        (state) => {
          state.requestStatus = 'failed';
        }
      );
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    city: (state: OffersState) => state.currentCity,
  },
});
