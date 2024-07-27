type TOfferRatingProps = {
  rating: number;
  isOnlyStars?: boolean;
  extraClassName?: string;
};

function Rating({ rating, isOnlyStars, extraClassName }: TOfferRatingProps) {
  return (
    <div className={`rating, ${extraClassName}__rating`}>
      <div className={`${extraClassName}__stars rating__stars`}>
        <span style={{ width: `${(100 / 5) * rating}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isOnlyStars && (
        <span className={`${extraClassName}__rating-value rating__value`}>
          {rating}
        </span>
      )}
    </div>
  );
}

export default Rating;
