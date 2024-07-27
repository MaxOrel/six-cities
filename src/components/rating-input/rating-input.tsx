import { ChangeEvent } from 'react';

type TRatingInputProps = {
  value: number;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

function RatingInput({ value, onChange, title }: TRatingInputProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
