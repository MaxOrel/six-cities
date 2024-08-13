import { Offer, OfferPreview } from '@customType/offer';
import { Endpoint } from '@shared/constants';
import { createAppAsyncThunk } from '@store/hooks/createAppAsyncThunk';

export const fetchOffer = createAppAsyncThunk<Offer, string>(
  'offer/fetchOffer',
  async (offerId, { extra: api }) => {
    const response = await api.get<Offer>(`${Endpoint.Offers}/${offerId}`);

    return response.data;
  }
);

export const fetchNearBy = createAppAsyncThunk<OfferPreview[], string>(
  'offer/fetchNearBy',
  async (offerId, { extra: api }) => {
    const response = await api.get<OfferPreview[]>(
      `${Endpoint.Offers}/${offerId}/nearby`
    );

    return response.data;
  }
);
