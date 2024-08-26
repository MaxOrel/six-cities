import { RequestStatus } from '@shared/api';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { reviewsActions, reviewsSelectors } from '@store/slices/reviews';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { RATING } from '../../shared/constants';
import RatingInput from '../rating-input';
type ReviewsFormProps = {
  offerId: string;
};
function ReviewsForm({ offerId }: ReviewsFormProps) {
  const reviewStatus = useAppSelector(reviewsSelectors.reviewsStatus);
  const dispatch = useAppDispatch();
  const [userAnswer, setUserAnswer] = useState({
    stars: 0,
    description: '',
  });
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      reviewsActions.postReview({
        offerId,
        body: {
          comment: userAnswer.description,
          rating: userAnswer.stars,
        },
      })
    )
      .unwrap()
      .then(() => {
        setUserAnswer({
          stars: 0,
          description: '',
        });
        toast.success('Комментарий успешно отправлен!');
      })
      .catch(() => {
        toast.error('Возникла ошибка при добавлении комментария!');
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {RATING.map((item) => (
          <RatingInput
            key={item.stars}
            value={item.stars}
            title={item.title}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
              setUserAnswer({ ...userAnswer, stars: Number(target.value) });
            }}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userAnswer.description}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setUserAnswer({ ...userAnswer, description: target.value });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={reviewStatus === RequestStatus.Loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
