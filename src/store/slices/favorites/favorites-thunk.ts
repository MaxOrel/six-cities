import { Offer, OfferPreview } from '@customType/offer';
import { Endpoint } from '@shared/constants';
import { createAppAsyncThunk } from '@store/hooks/createAppAsyncThunk';
import { FavoritesStatus } from './types';

type ChangeProps = {
  offerId: string;
  status: FavoritesStatus;
};

type ChangeResponse = {
  offer: OfferPreview;
  status: FavoritesStatus;
};

const fetchFavorites = createAppAsyncThunk<OfferPreview[], undefined>(
  'favorites/fetchAll',
  async (_arg, { extra: api }) => {
    const response = await api.get<OfferPreview[]>(Endpoint.Favorite);

    return response.data;
  }
);

const changeFavorites = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorites/change',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<Offer>(
      `${Endpoint.Favorite}/${offerId}/${status}`
    );

    return { offer: response.data, status };
  }
);

export { changeFavorites, fetchFavorites };

