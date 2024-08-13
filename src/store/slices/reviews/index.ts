import { reviewsSlice } from './reviews-slice';
import { fetchReviews, postReview } from './reviews-thunk';

export const reviewsSelectors = reviewsSlice.selectors;
export const reviewsActions = { ...reviewsSlice.actions, fetchReviews, postReview};

export default reviewsSlice;
