import { AppRoute } from '@constants';
import { OfferPreview } from '@customType/offer';
import { getRatingWidth } from '@utils/offer';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
type Size = 'small' | 'medium' | 'large';
type CardType = 'favorites' | 'cities';
type OfferCardProps = {
  offer: OfferPreview;
  size: Size;
  variant?: CardType;
};
function getImageSize(size: Size) {
  if (size === 'small') {
    return { width: '150', height: '110' };
  }
  if (size === 'large') {
    return { width: '260', height: '200' };
  }
}

function OfferCard({
  offer,
  variant,
  size,
}: OfferCardProps): JSX.Element {
  return (
    <article className={clsx(variant && `${variant}__card`, 'place-card')}>
      {
        offer.isPremium
          ? <div className="place-card__mark"><span>Premium</span></div>
          : null
      }
      <div
        className={clsx(
          variant && `${variant}__image-wrapper`,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={`${offer.previewImage}`}
            {...getImageSize(size)}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(offer.rating)}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
