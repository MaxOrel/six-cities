import { OfferPreview } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { OFFERS_SLICE_NAME } from '../slice-name';

export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>('/offers');
    return data;
  }
);

console.dir(fetchOffersAction);
