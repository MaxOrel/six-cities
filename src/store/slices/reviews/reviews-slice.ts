import { Review } from '@customType/review';
import { createSlice } from '@reduxjs/toolkit';
import { REVIEWS_SLICE_NAME } from '@slices/slice-name';
import { REVIEWS } from '../../../mocks/reviews';

type ReviewsState = {
  items: Review[];
};

const initialState: ReviewsState = {
  items: REVIEWS,
};

export const reviewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {},
  selectors: {
    reviews: (state) => state.items,
  },
});
