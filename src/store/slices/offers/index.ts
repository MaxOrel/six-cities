import { fetchOffersAction } from './offer-thunk';
import { offersSlice } from './offers-slice';

export const offersActions = { ...offersSlice.actions, fetchOffersAction};
export const offersSelectors = offersSlice.selectors;


export default offersSlice;
