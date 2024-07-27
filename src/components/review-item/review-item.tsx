import Rating from '@components/rating';
import { Review } from '@customType/review';
import { formatDate } from '@utils/offer';

function ReviewItem({ rating, user, comment, date }: Review) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating extraClassName="reviews" rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
