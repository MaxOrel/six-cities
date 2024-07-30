import { Offer, OfferPreview } from '@customType/offer';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OFFER_SLICE_NAME } from '@slices/slice-name';

type OfferState = {
  info: Offer | null;
  nearby: OfferPreview[];
};

const initialState: OfferState = {
  info: null,
  nearby: [],
};

export const offerSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  reducers: {
    clear: (state) => {
      state.info = null;
      state.nearby = [];
    },
    updateOffer: (state, action: PayloadAction<string>) => {
      state.info =
        state.info?.id === action.payload
          ? { ...state.info, isFavorite: !state.info?.isFavorite }
          : state.info;
    },
  },

  selectors: {
    nearbyOffers: (state) => state.nearby,
    offer: (state) => state.info,
  },
});


