import { CitiesName } from '@customType/city';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '@shared/api';
import { CITIES } from '@shared/constants';
import { OFFERS_SLICE_NAME } from '@slices/slice-name';
import { isActionPending, isActionRejected } from '@utils/redux';
import { fetchOffersAction } from './offer-thunk';
import { OffersState } from './types';

const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offers: [],
  requestStatus: RequestStatus.Idle,
};

export const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
    updateOffers: (state, action: PayloadAction<string>) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload
          ? { ...offer, isFavorite: !offer.isFavorite }
          : offer
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addMatcher(isActionPending(OFFERS_SLICE_NAME), (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addMatcher(isActionRejected(OFFERS_SLICE_NAME), (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    city: (state: OffersState) => state.currentCity,
    offersStatus: (state: OffersState) => state.requestStatus,
  },
});
