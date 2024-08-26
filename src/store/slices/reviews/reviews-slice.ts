import { Review } from '@customType/review';
import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@shared/api';
import { REVIEWS_SLICE_NAME } from '@slices/slice-name';
import { isActionPending, isActionRejected } from '@utils/redux';
import { fetchReviews, postReview } from './reviews-thunk';

type ReviewsState = {
  items: Review[];
  status: RequestStatus
};

const initialState: ReviewsState = {
  items: [],
  status: RequestStatus.Idle
};

export const reviewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(isActionPending(REVIEWS_SLICE_NAME), (state) => {
        state.status = RequestStatus.Loading;
      })
      .addMatcher(isActionRejected(REVIEWS_SLICE_NAME), (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    reviews: (state) => state.items,
    reviewsStatus: (state) => state.status,
  },
});
