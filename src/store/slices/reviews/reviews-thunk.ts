import { Offer } from '@customType/offer';
import { Review } from '@customType/review';
import { Endpoint } from '@shared/constants';
import { createAppAsyncThunk } from '@store/hooks/createAppAsyncThunk';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: Offer['id'];
};


export const fetchReviews = createAppAsyncThunk<Review[], Offer['id']>(
  'reviews/fetchReviews',
  async (offerId, { extra: api }) => {
    const response = await api.get<Review[]>(`${Endpoint.Comments}/${offerId}`);

    return response.data;
  }
);

export const postReview = createAppAsyncThunk<Review, PostCommentProps>(
  'reviews/postReview',
  async ({ body, offerId }, { extra: api }) => {
    const response = await api.post<Review>(
      `${Endpoint.Comments}/${offerId}`,
      body
    );

    return response.data;
  }
);
