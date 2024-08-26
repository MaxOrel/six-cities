import ReviewList from '@components/review-list';
import ReviewsForm from '@components/reviews-form';
import { Review } from '@customType/review';
import clsx from 'clsx';
import { useAuth } from '../../hooks/use-auth';

type TReviewProps = {
  extraClassName?: string;
  reviews: Review[];
  offerId: string;
};

function Reviews({ extraClassName, reviews, offerId }: TReviewProps) {
  const isAuth = useAuth()

  return (
    <section className={clsx('reviews', extraClassName)}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      {isAuth && <ReviewsForm offerId={offerId} />}
    </section>
  );
}

export default Reviews;
