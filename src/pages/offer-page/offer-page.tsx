import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery';
import Map from '../../components/map';
import OfferCard from '../../components/offer-card';
import OfferGoods from '../../components/offer-goods';
import OfferHost from '../../components/offer-host';
import OfferList from '../../components/offer-list/offer-list';
import PremiumBadge from '../../components/premium-badge';
import Rating from '../../components/rating';
import Reviews from '../../components/reviews';
import { OFFER_DETAIL } from '../../mocks/offers';
import { REVIEWS } from '../../mocks/reviews';
import { Offer, OfferPreview } from '../../types/offer';

type OfferPageProps = {
  offers: OfferPreview[];
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find((offer) => offer.id === offerId);
  const offerDetail = { ...offer, ...OFFER_DETAIL } as Offer;
  const reviews = REVIEWS.filter((review) => review.offerId === offer?.id);

  const currentCity = offers[0].city;
  const otherPlaces = offers.slice(0, 3);

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery images={offerDetail.images} />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <PremiumBadge
              isPremium={offerDetail.isPremium}
              extraClassName="offer__mark"
            />
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offerDetail.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating rating={offerDetail.rating} />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offerDetail.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offerDetail.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offerDetail.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offerDetail.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <OfferGoods goods={offerDetail.goods} />
            </div>
            <OfferHost
              isPro={offerDetail.host.isPro}
              avatarUrl={offerDetail.host.avatarUrl}
              name={offerDetail.host.name}
            />
            <div className="offer__description">
              <p className="offer__text">{offerDetail.description}</p>
            </div>
            <Reviews extraClassName="offer__reviews" reviews={reviews} />
          </div>
        </div>
        <Map
          extraClassName="offer__map"
          city={currentCity}
          points={otherPlaces}
          selectedPoint={null}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <OfferList offers={otherPlaces} extraClassName="near-places__list">
            {(dataCard) => (
              <OfferCard
                variant="near-places"
                size="large"
                key={dataCard.id}
                offer={dataCard}
              />
            )}
          </OfferList>
        </section>
      </div>
    </>
  );
}
export default OfferPage;
