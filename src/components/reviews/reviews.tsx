import ReviewList from '@components/review-list';
import ReviewsForm from '@components/reviews-form';
import { Review } from '@customType/review';
import clsx from 'clsx';

type TReviewProps = {
  extraClassName?: string;
  reviews: Review[];
};

function Reviews({ extraClassName, reviews }: TReviewProps) {
  return (
    <section className={clsx('reviews', extraClassName)}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <ReviewsForm />
    </section>
  );
}

export default Reviews;
