import { offerSlice } from './offer-slice';
import { fetchNearBy, fetchOffer } from './offer-thunk';

export const offerActions = { ...offerSlice.actions, fetchOffer, fetchNearBy};
export const offerSelectors = offerSlice.selectors;

export default offerSlice;
